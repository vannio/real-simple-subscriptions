import * as ducks from './index';

describe('ducks', () => {
  it('get subscription keys from the state', () => {
    let state = {
      subscriptions: {
        exampleSubscriptionId: {},
        exampleSubscriptionIdA: {}
      }
    };

    expect(ducks.getSubscriptionKeys(state))
      .toEqual([
        'exampleSubscriptionId',
        'exampleSubscriptionIdA'
      ]);
  });

  it('gets subscription config from the state', () => {
    let state = {
      subscriptions: {
        exampleSubscriptionId: {
          dateAdded: 1501778672712,
          title: 'Example feed',
          url: 'http://example.com/rss.xml'
        }
      }
    };

    expect(ducks.getSubscription(state, 'exampleSubscriptionId'))
      .toEqual({
        dateAdded: 1501778672712,
        title: 'Example feed',
        url: 'http://example.com/rss.xml'
      });
  });

  it('gets a feedItem object from the state', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          bookMarked: [],
          items: [],
          markedAsRead: [],
          unreadCount: 0
        }
      }
    };

    expect(ducks.getFeedItemObject(state, 'exampleSubscriptionId'))
      .toEqual({
        bookMarked: [],
        items: [],
        markedAsRead: [],
        unreadCount: 0
      });
  });

  it('gets all the feedItem objects from the state', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ]
        }
      }
    };

    expect(ducks.getAllFeedItems(state, 'exampleSubscriptionId'))
      .toEqual([
        { id: 'example1' },
        { id: 'example2' },
        { id: 'example3' }
      ]);
  });

  it('checks if an item has been read', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          markedAsRead: ['exampleItemId']
        }
      }
    };

    expect(ducks.isFeedItemRead(state, 'exampleSubscriptionId', 'exampleItemId')).toBe(true);
    expect(ducks.isFeedItemRead(state, 'exampleSubscriptionId', 'asdf')).toBe(false);
  });

  it('checks if an item has been bookmarked', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          bookmarked: ['example']
        }
      }
    };

    expect(ducks.isFeedItemBookmarked(state, 'exampleSubscriptionId', 'example')).toBe(true);
    expect(ducks.isFeedItemBookmarked(state, 'exampleSubscriptionId', 'asdf')).toBe(false);
  });

  it('filters out items that have been marked as read', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ],
          markedAsRead: ['example2']
        }
      }
    };

    expect(ducks.filterFeedItems(state, 'exampleSubscriptionId'))
      .toEqual([
        { id: 'example1' },
        { id: 'example3' }
      ]);
  });

  it('filters out items', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ],
          markedAsRead: ['example2']
        }
      }
    };

    expect(ducks.getFeedItems({
      ...state,
      settings: {
        hideRead: true
      }
    }, 'exampleSubscriptionId'))
      .toEqual([
        { id: 'example1' },
        { id: 'example3' }
      ]);

    expect(ducks.getFeedItems({
      ...state,
      settings: {
        hideRead: false
      }
    }, 'exampleSubscriptionId'))
      .toEqual([
        { id: 'example1' },
        { id: 'example2' },
        { id: 'example3' }
      ]);
  });

  it('gets bookmarked items', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ],
          bookmarked: ['example2']
        }
      }
    };

    expect(ducks.getBookmarkedItems(state, 'exampleSubscriptionId')).toEqual([{ id: 'example2' }]);
  });

  it('gets all of the bookmarked items', () => {
    let state = {
      subscriptions: {
        exampleSubscriptionId: {},
        exampleSubscriptionIdA: {}
      },
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ],
          bookmarked: ['example2']
        },
        exampleSubscriptionIdA: {
          items: [
            { id: 'example1A' },
            { id: 'example2A' },
            { id: 'example3A' }
          ],
          bookmarked: ['example1A']
        }
      }
    };

    expect(ducks.getBookmarkedItemObj(state)).toEqual({
      exampleSubscriptionId: [{ id: 'example2'}],
      exampleSubscriptionIdA: [{ id: 'example1A'}]
    });
  });

  it('counts all the bookmarked items', () => {
    let state = {
      subscriptions: {
        exampleSubscriptionId: {},
        exampleSubscriptionIdA: {}
      },
      feedItems: {
        exampleSubscriptionId: {
          items: [
            { id: 'example1' },
            { id: 'example2' },
            { id: 'example3' }
          ],
          bookmarked: ['example2']
        },
        exampleSubscriptionIdA: {
          items: [
            { id: 'example1A' },
            { id: 'example2A' },
            { id: 'example3A' }
          ],
          bookmarked: ['example1A']
        }
      }
    };

    expect(ducks.getBookmarkedItemsCount(state)).toEqual(2);
  });

  it('fetching', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          fetching: true
        }
      }
    };

    expect(ducks.isFeedItemsFetching(state, 'exampleSubscriptionId')).toBe(true);
  });

  it('error', () => {
    let state = {
      feedItems: {
        exampleSubscriptionId: {
          error: 'This is an error'
        }
      }
    };

    expect(ducks.getFeedItemsFetchError(state, 'exampleSubscriptionId')).toEqual('This is an error');
  });
});
