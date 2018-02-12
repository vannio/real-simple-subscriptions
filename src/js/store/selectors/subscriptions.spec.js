import {
  getSubscriptionKeys,
  getSubscription,
  getAllFeedItems,
  getFeedItems,
  isFeedItemRead,
  isFeedItemBookmarked,
  getBookmarkedItems,
  getAllBookmarkedItems,
  getBookmarkedItemsCount,
  isFeedItemsFetching,
  getFeedItemsFetchError,
  getTotalUnreadCount,
} from './subscriptions';

describe('Selectors: subscriptions', () => {
  describe('#getSubscriptionKeys', function() {
    test('gets a list of subscription IDs', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {},
          exampleSubscriptionIdA: {},
        },
      };

      expect(getSubscriptionKeys(state)).toEqual([
        'exampleSubscriptionId',
        'exampleSubscriptionIdA',
      ]);
    });
  });

  describe('#getSubscription', function() {
    test('gets a subscription object from a given ID', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            bookMarked: [],
            items: [],
            markedAsRead: [],
            unreadCount: 0,
          },
        },
      };

      expect(getSubscription(state, 'exampleSubscriptionId')).toEqual({
        bookMarked: [],
        items: [],
        markedAsRead: [],
        unreadCount: 0,
      });
    });
  });

  describe('#getAllFeedItems', function() {
    test('gets all the feed items of a given subscription', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
          },
        },
      };

      expect(getAllFeedItems(state, 'exampleSubscriptionId')).toEqual([
        { id: 'example1' },
        { id: 'example2' },
        { id: 'example3' },
      ]);
    });
  });

  describe('#getFeedItems', function() {
    test('filters out items that have been marked as read if `hideRead` is set to true', function() {
      let state = {
        config: {
          hideRead: true,
        },
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
            markedAsRead: ['example2'],
          },
        },
      };

      expect(getFeedItems(state, 'exampleSubscriptionId')).toEqual([
        { id: 'example1' },
        { id: 'example3' },
      ]);
    });

    test('does not filter out items that have been marked as read if `hideRead` is set to false', () => {
      let state = {
        config: {
          hideRead: false,
        },
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
            markedAsRead: ['example2'],
          },
        },
      };

      expect(getFeedItems(state, 'exampleSubscriptionId')).toEqual([
        { id: 'example1' },
        { id: 'example2' },
        { id: 'example3' },
      ]);

      expect(
        getFeedItems(
          {
            ...state,
            settings: {
              hideRead: false,
            },
          },
          'exampleSubscriptionId',
        ),
      ).toEqual([{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }]);
    });
  });

  describe('#isFeedItemRead', function() {
    test('checks if an item has been marked as read', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            markedAsRead: ['exampleItemId'],
          },
        },
      };

      expect(
        isFeedItemRead(state, 'exampleSubscriptionId', 'exampleItemId'),
      ).toBe(true);
      expect(isFeedItemRead(state, 'exampleSubscriptionId', 'asdf')).toBe(
        false,
      );
    });
  });

  describe('#isFeedItemBookmarked', function() {
    test('checks if an item has been bookmarked', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            bookmarked: ['example'],
          },
        },
      };

      expect(
        isFeedItemBookmarked(state, 'exampleSubscriptionId', 'example'),
      ).toBe(true);
      expect(isFeedItemBookmarked(state, 'exampleSubscriptionId', 'asdf')).toBe(
        false,
      );
    });
  });

  describe('#getBookmarkedItems', function() {
    test('gets a list of bookmarked items of a given subscription', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
            bookmarked: ['example2'],
          },
        },
      };

      expect(getBookmarkedItems(state, 'exampleSubscriptionId')).toEqual([
        { id: 'example2' },
      ]);
    });
  });

  describe('#getAllBookmarkedItems', function() {
    test('gets all bookmarked items from every subscription', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {},
          exampleSubscriptionIdA: {},
        },
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
            bookmarked: ['example2'],
          },
          exampleSubscriptionIdA: {
            items: [
              { id: 'example1A' },
              { id: 'example2A' },
              { id: 'example3A' },
            ],
            bookmarked: ['example1A'],
          },
        },
      };

      expect(getAllBookmarkedItems(state)).toEqual({
        exampleSubscriptionId: [{ id: 'example2' }],
        exampleSubscriptionIdA: [{ id: 'example1A' }],
      });
    });
  });

  describe('#getBookmarkedItemsCount', function() {
    test('counts all the bookmarked items', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {},
          exampleSubscriptionIdA: {},
        },
        subscriptions: {
          exampleSubscriptionId: {
            items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
            bookmarked: ['example2'],
          },
          exampleSubscriptionIdA: {
            items: [
              { id: 'example1A' },
              { id: 'example2A' },
              { id: 'example3A' },
            ],
            bookmarked: ['example1A'],
          },
        },
      };

      expect(getBookmarkedItemsCount(state)).toEqual(2);
    });
  });

  describe('#isFeedItemsFetching', function() {
    test('checks if a request is pending', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            request: {
              pending: true,
            },
          },
        },
      };

      expect(isFeedItemsFetching(state, 'exampleSubscriptionId')).toBe(true);
    });
  });

  describe('#getFeedItemsFetchError', function() {
    test('gets fetching error messages', () => {
      let state = {
        subscriptions: {
          exampleSubscriptionId: {
            request: {
              error: 'This is an error',
            },
          },
        },
      };

      expect(getFeedItemsFetchError(state, 'exampleSubscriptionId')).toEqual(
        'This is an error',
      );
    });
  });

  describe('#getTotalUnreadCount', function() {
    let state = {
      subscriptions: {
        exampleSubscriptionId: {
          items: [{ id: 'example1' }, { id: 'example2' }, { id: 'example3' }],
          markedAsRead: ['example2'],
        },
        anotherExample: {
          items: [{ id: 'exampleA' }, { id: 'exampleB' }, { id: 'exampleC' }],
          markedAsRead: [],
        },
      },
    };

    expect(getTotalUnreadCount(state)).toEqual(5);
  });
});
