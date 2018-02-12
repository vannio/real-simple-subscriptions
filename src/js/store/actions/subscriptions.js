require('rss-parser/dist/rss-parser');
const parser = new window.RSSParser();

// SUBSCRIPTIONS
export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const addSubscription = subscription => ({
  type: ADD_SUBSCRIPTION,
  subscription,
  timestamp: Date.now(),
});

export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION';
export const updateSubscription = subscription => ({
  type: UPDATE_SUBSCRIPTION,
  subscription,
});

export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';
export const deleteSubscription = subscriptionId => ({
  type: DELETE_SUBSCRIPTION,
  subscriptionId,
});

// FEED ITEMS
export const TOGGLE_FEEDITEM_READ = 'TOGGLE_FEEDITEM_READ';
export const toggleMarkedAsRead = (subscriptionId, feedItemId) => ({
  type: TOGGLE_FEEDITEM_READ,
  subscriptionId,
  feedItemId,
});

export const MARK_ALL_FEEDITEMS_READ = 'MARK_ALL_FEEDITEMS_READ';
export const markAllAsRead = subscriptionId => ({
  type: MARK_ALL_FEEDITEMS_READ,
  subscriptionId,
});

export const TOGGLE_BOOKMARK_FEEDITEM = 'TOGGLE_BOOKMARK_FEEDITEM';
export const toggleBookmarkFeedItem = (subscriptionId, feedItemId) => ({
  type: TOGGLE_BOOKMARK_FEEDITEM,
  subscriptionId,
  feedItemId,
});

export const FETCH_FEEDITEMS_PENDING = 'FETCH_FEEDITEMS_PENDING';
export const fetchFeedItemsPending = (subscriptionId, url) => ({
  type: FETCH_FEEDITEMS_PENDING,
  subscriptionId,
  url,
});

export const FETCH_FEEDITEMS_SUCCESS = 'FETCH_FEEDITEMS_SUCCESS';
export const fetchFeedItemsSuccess = (subscriptionId, items) => ({
  type: FETCH_FEEDITEMS_SUCCESS,
  subscriptionId,
  items,
  timestamp: Date.now(),
});

export const FETCH_FEEDITEMS_FAIL = 'FETCH_FEEDITEMS_FAIL';
export const fetchFeedItemsFail = (subscriptionId, error) => ({
  type: FETCH_FEEDITEMS_FAIL,
  subscriptionId,
  error,
});

export const fetchFeedItems = (subscriptionId, url) => dispatch => {
  dispatch(fetchFeedItemsPending(subscriptionId));
  (async function() {
    try {
      const result = await parser.parseURL(url);
      dispatch(fetchFeedItemsSuccess(subscriptionId, result.items));
    } catch (error) {
      const err = error.message;
      dispatch(fetchFeedItemsFail(subscriptionId, err));
    }
  })();
};
