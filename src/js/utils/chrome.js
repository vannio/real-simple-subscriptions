/* global chrome */
import { fetchFeedItems } from '../store/actions';
import { loadState } from './localStorage';
import { store } from '../../';

export const fetchAllFeedItems = (forceFetch = false) => {
  const config = loadState('config');
  const subscriptions = loadState('subscriptions');
  const fetchIntervalMS = config.fetchInterval * 60000;

  if (forceFetch || Date.now() >= config.latestFetch + fetchIntervalMS) {
    Object.keys(subscriptions).forEach(id => {
      fetchFeedItems(id, subscriptions[id].url)(store.dispatch);
    });
  }
};

// export const updateChromeBadge = () => {
//   if (typeof window.chrome.browserAction !== 'undefined') {
//     const feedItems = loadState('config').feedItems;
//     const unreadCount = Object.keys(feedItems).reduce(
//       (count, key) => count + (feedItems[key].unreadCount || 0), 0
//     ).toString();
//
//     window.chrome.browserAction.setBadgeText({
//       text: unreadCount
//     });
//   }
// };

export default () => {
  fetchAllFeedItems();

  if (typeof chrome.browserAction !== 'undefined') {
    chrome.browserAction.onClicked.addListener(() => {
      chrome.tabs.query(
        {
          url: 'chrome://newtab/',
          title: 'RSS | Real Simple Subscriptions',
          lastFocusedWindow: true,
        },
        tabs => {
          if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { active: true, pinned: true });
          } else {
            chrome.tabs.create({ pinned: true });
          }
        },
      );
    });

    chrome.alarms.create('updatedFeedItems', {
      periodInMinutes: loadState().settings.fetchInterval,
    });

    chrome.alarms.onAlarm.addListener(alarm => {
      if (alarm.name === 'updatedFeedItems') {
        fetchAllFeedItems();
      }
    });
  }
};
