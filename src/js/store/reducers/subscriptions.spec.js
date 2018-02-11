import {
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  FETCH_FEEDITEMS_PENDING,
  FETCH_FEEDITEMS_SUCCESS,
  FETCH_FEEDITEMS_FAIL,
  TOGGLE_FEEDITEM_READ,
  MARK_ALL_FEEDITEMS_READ,
  TOGGLE_BOOKMARK_FEEDITEM,
} from '../actions/subscriptions';

import reducer from './subscriptions';

describe('Reducers: subscriptions', function() {
  describe('manages subscriptions', function() {
    test(ADD_SUBSCRIPTION, function() {
      const timestamp = Date.now();
      const action = {
        type: ADD_SUBSCRIPTION,
        timestamp,
        subscription: {
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      };
      expect(reducer({}, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: timestamp,
          items: [],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      });
    });

    test(UPDATE_SUBSCRIPTION, function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      };

      const action = {
        type: UPDATE_SUBSCRIPTION,
        subscription: {
          id: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
          title: 'BBC Snooze',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [],
          markedAsRead: [],
          title: 'BBC Snooze',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      });
    });

    test(DELETE_SUBSCRIPTION, function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
        },
      };

      const action = {
        type: DELETE_SUBSCRIPTION,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
      };

      expect(reducer(state, action)).toEqual({});
    });
  });

  describe('manages fetching feed items', function() {
    const state = {
      '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
        bookmarked: [],
        dateAdded: 1518377083449,
        items: [],
        markedAsRead: [],
        title: 'BBC News',
        url: 'http://feeds.bbci.co.uk/news/rss.xml',
      },
    };

    test(FETCH_FEEDITEMS_PENDING, function() {
      const action = {
        type: FETCH_FEEDITEMS_PENDING,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: true,
          },
        },
      });
    });

    test(FETCH_FEEDITEMS_SUCCESS, function() {
      const action = {
        type: FETCH_FEEDITEMS_SUCCESS,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        items: [
          {
            link: 'http://feeds.bbci.co.uk/news/1',
          },
          {
            link: 'http://feeds.bbci.co.uk/news/2',
          },
          {
            link: 'http://feeds.bbci.co.uk/news/3',
          },
        ],
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });

    test(FETCH_FEEDITEMS_FAIL, function() {
      const action = {
        type: FETCH_FEEDITEMS_FAIL,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        error: 'Oh no, it happened again',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
            error: 'Oh no, it happened again',
          },
        },
      });
    });
  });

  describe('manages marking feed items', function() {
    test('Marks as read if not marked on TOGGLE_FEEDITEM_READ', function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      };

      const action = {
        type: TOGGLE_FEEDITEM_READ,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        feedItemId: '155b7023-f48b-5c00-ac2d-557620f58e29',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: ['155b7023-f48b-5c00-ac2d-557620f58e29'],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });

    test('Unmarks as read if already marked on TOGGLE_FEEDITEM_READ', function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: ['155b7023-f48b-5c00-ac2d-557620f58e29'],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      };

      const action = {
        type: TOGGLE_FEEDITEM_READ,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        feedItemId: '155b7023-f48b-5c00-ac2d-557620f58e29',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });

    test(MARK_ALL_FEEDITEMS_READ, function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: ['155b7023-f48b-5c00-ac2d-557620f58e29'],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      };

      const action = {
        type: MARK_ALL_FEEDITEMS_READ,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [
            '155b7023-f48b-5c00-ac2d-557620f58e29',
            '9a44a02f-c8cd-58d0-8029-1749f4d14778',
            '78c7d9a7-d079-572a-adf8-1e399549b5c9',
          ],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });

    test('Bookmarks item if not marked on TOGGLE_BOOKMARK_FEEDITEM', function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      };

      const action = {
        type: TOGGLE_BOOKMARK_FEEDITEM,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        feedItemId: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: ['78c7d9a7-d079-572a-adf8-1e399549b5c9'],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });

    test('Unbookmarks item if already bookmarked on TOGGLE_BOOKMARK_FEEDITEM', function() {
      const state = {
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: ['78c7d9a7-d079-572a-adf8-1e399549b5c9'],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      };

      const action = {
        type: TOGGLE_BOOKMARK_FEEDITEM,
        subscriptionId: '4cb211c3-e9fe-5414-b81e-ba4722f5f795',
        feedItemId: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
      };

      expect(reducer(state, action)).toEqual({
        '4cb211c3-e9fe-5414-b81e-ba4722f5f795': {
          bookmarked: [],
          dateAdded: 1518377083449,
          items: [
            {
              id: '155b7023-f48b-5c00-ac2d-557620f58e29',
              link: 'http://feeds.bbci.co.uk/news/1',
            },
            {
              id: '9a44a02f-c8cd-58d0-8029-1749f4d14778',
              link: 'http://feeds.bbci.co.uk/news/2',
            },
            {
              id: '78c7d9a7-d079-572a-adf8-1e399549b5c9',
              link: 'http://feeds.bbci.co.uk/news/3',
            },
          ],
          markedAsRead: [],
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          request: {
            pending: false,
          },
        },
      });
    });
  });
});
