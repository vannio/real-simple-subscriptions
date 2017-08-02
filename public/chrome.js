/* global chrome */

chrome.browserAction.onClicked.addListener(() => {
  chrome.fetchFeedItems();
	chrome.tabs.create({ url: 'index.html' });
});

chrome.alarms.create('checkForUpdates', { 'periodInMinutes': 15 });
chrome.alarms.onAlarm.addListener(alarm => {
	if (alarm.name === 'checkForUpdates') {
    chrome.fetchFeedItems();
  }
});
