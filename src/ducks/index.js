export const getSubscriptionKeys = state =>
  Object.keys(state.subscriptions);

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

export const getBookmarkedItems = (state, subscriptionId) =>
  getAllFeedItems(state, subscriptionId).filter(
    item => isFeedItemBookmarked(state, subscriptionId, item.id)
  );

export const getBookmarkedItemObj = state =>
  getSubscriptionKeys(state).reduce(
    (obj, key) => ({ ...obj, [key]: getBookmarkedItems(state, key) }), {}
  );

export const getBookmarkedItemsCount = state =>
  getSubscriptionKeys(state).reduce((arr, key) => arr.concat(getBookmarkedItemObj(state)[key]), []).length;

export const isFeedItemsFetching = (state, subscriptionId) =>
  getFeedItemObject(state, subscriptionId).fetching;

export const getFeedItemsFetchError = (state, subscriptionId) =>
  getFeedItemObject(state, subscriptionId).error;
