/* global chrome */
import { fetchFeedItems } from '../actions';
import { loadState } from './localStorage';
import { store } from '../index';
import { getSubscriptionKeys } from '../ducks';

export const fetchAllFeedItems = () => {
  const subscriptions = loadState().subscriptions;
  getSubscriptionKeys(subscriptions).forEach(id => {
    fetchFeedItems(id, subscriptions[id].url)(store.dispatch);
  });
};

export default () => {
  fetchAllFeedItems();

  if (typeof chrome.browserAction !== 'undefined') {
    chrome.browserAction.onClicked.addListener(
      () => {
        fetchAllFeedItems();
      	chrome.tabs.create({ url: 'index.html' });
      }
    );

    chrome.alarms.create('updatedFeedItems', {
      'periodInMinutes': loadState().settings.fetchInterval
    });

    chrome.alarms.onAlarm.addListener(
      alarm => alarm.name === 'updatedFeedItems' && fetchAllFeedItems()
    );
  }
};
