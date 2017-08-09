export const getSubscriptionKeys = subscriptions =>
  Object.keys(subscriptions);

export const getSubscription = (state, subscriptionId) =>
  state.subscriptions[subscriptionId];

export const getFeedItemObject = (state, subscriptionId) =>
  state.feedItems[subscriptionId] || {};

export const getAllFeedItems = (state, subscriptionId) =>
  getFeedItemObject(state, subscriptionId).items || [];

export const isFeedItemRead = (state, subscriptionId, feedItemId) =>
  (getFeedItemObject(state, subscriptionId).markedAsRead || []).indexOf(feedItemId) > -1;

export const isFeedItemBookmarked = (state, subscriptionId, feedItemId) =>
  (getFeedItemObject(state, subscriptionId).bookmarked || []).indexOf(feedItemId) > -1;

export const filterFeedItems = (state, subscriptionId) =>
  getAllFeedItems(state, subscriptionId).filter(item => !isFeedItemRead(state, subscriptionId, item.id)
);

export const getFeedItems = (state, subscriptionId) => 
  state.settings.hideRead ? filterFeedItems(state, subscriptionId) : getAllFeedItems(state, subscriptionId);

export const isFeedItemsFetching = (state, subscriptionId) =>
  getFeedItemObject(state, subscriptionId).fetching;

export const getFeedItemsFetchError = (state, subscriptionId) =>
  getFeedItemObject(state, subscriptionId).error;
