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

  if (chrome.browserAction) {
    chrome.browserAction.onClicked.addListener(function(){
      fetchAllFeedItems();
    	chrome.tabs.create({ url: 'index.html' });
    });

    chrome.alarms.create('checkForUpdates', { 'periodInMinutes': loadState().fetchInterval });
    chrome.alarms.onAlarm.addListener(alarm => {
    	if (alarm.name === 'checkForUpdates') {
        fetchAllFeedItems();
      }
    });
  }
};
