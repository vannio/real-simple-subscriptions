import { migrate, loadState } from './localStorage';
import { v1, v2 } from './localStorage.fixtures';
import { INITIAL_STATE } from '../../config';

describe('localStorage', function() {
  describe('#migrate', function() {
    test('migrates config from v1 to v2', function() {
      expect(migrate('config', v1)).toEqual({
        maxCount: 8,
        readOnOpen: true,
        hideRead: false,
        fetchInterval: 60,
        accentColour: 'Green',
        showSummary: true,
        showContent: 'firstParagraph',
        showImages: false,
      });
    });

    test('migrates subscriptions from v1 to v2', function() {
      expect(migrate('subscriptions', v1)).toEqual({
        '57cd1a69-5fab-48f7-a9bf-8a38b31612fd': {
          title: 'BBC News',
          url: 'http://feeds.bbci.co.uk/news/rss.xml',
          dateAdded: 1501778672712,
          items: [],
          markedAsRead: [],
          bookmarked: [],
        },
        '0a65455f-c4cd-42c0-85ba-b596a68c07d4': {
          title: '/r/frontpage',
          url: 'https://www.reddit.com/.rss',
          dateAdded: 1501778714008,
          items: [],
          markedAsRead: [],
          bookmarked: [],
        },
        '56a031d8-ab02-41dc-aea0-eb1951166b97': {
          title: 'Hackernews',
          url: 'https://news.ycombinator.com/rss',
          dateAdded: 1501778721764,
          items: [],
          markedAsRead: [],
          bookmarked: [],
        },
      });
    });

    test('does not migrate config if v2 state exists', function() {
      expect(migrate('config', v2)).toEqual(JSON.parse(v2.config));
    });

    test('does not migrate subscriptions if v2 state exists', function() {
      expect(migrate('subscriptions', v2)).toEqual(
        JSON.parse(v2.subscriptions),
      );
    });

    test('throws an error if config is empty', function() {
      expect(() => migrate('config', {})).toThrow('No config found');
      expect(() => migrate('subscription', { subscriptions: '{}' })).toThrow(
        'No config found',
      );
    });

    test('throws an error if subscriptions are empty', function() {
      expect(() => migrate('subscriptions', { config: '{}' })).toThrow(
        'No subscriptions found',
      );
    });
  });

  describe('#loadState', function() {
    test('loads from initial state if localStorage cannot be migrated', function() {
      expect(loadState('config')).toEqual(INITIAL_STATE.config);
      expect(loadState('subscriptions')).toEqual(INITIAL_STATE.subscriptions);
    });

    test('falls back to an empty object if key cannot be matched in the initial state', function() {
      expect(loadState('abcdefg')).toEqual({});
    });
  });
});
