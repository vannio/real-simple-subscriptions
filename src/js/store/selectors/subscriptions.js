import get from 'lodash/get';
import { getUnreadCount } from '../../utils/getUnreadCount';

export const getSubscriptions = state => state.subscriptions || {};

export const getSubscriptionKeys = state =>
  Object.keys(getSubscriptions(state)) || [];

export const getSubscription = (state, subscriptionId) =>
  get(state, ['subscriptions', subscriptionId], {});

export const getAllFeedItems = (state, subscriptionId) =>
  get(state, ['subscriptions', subscriptionId, 'items'], []);

export const isFeedItemRead = (state, subscriptionId, feedItemId) =>
  getSubscription(state, subscriptionId).markedAsRead.includes(feedItemId);

export const isFeedItemBookmarked = (state, subscriptionId, feedItemId) =>
  getSubscription(state, subscriptionId).bookmarked.includes(feedItemId);

export const getFeedItems = (state, subscriptionId) =>
  state.config.hideRead
    ? getAllFeedItems(state, subscriptionId).filter(
        item => !isFeedItemRead(state, subscriptionId, item.id),
      )
    : getAllFeedItems(state, subscriptionId);

export const getBookmarkedItems = (state, subscriptionId) =>
  getAllFeedItems(state, subscriptionId).filter(item =>
    isFeedItemBookmarked(state, subscriptionId, item.id),
  );

export const getAllBookmarkedItems = state =>
  getSubscriptionKeys(state).reduce(
    (obj, key) => ({ ...obj, [key]: getBookmarkedItems(state, key) }),
    {},
  );

export const getBookmarkedItemsCount = state =>
  getSubscriptionKeys(state).reduce(
    (count, key) => count + getBookmarkedItems(state, key).length,
    0,
  );

export const isFeedItemsFetching = (state, subscriptionId) =>
  get(state, ['subscriptions', subscriptionId, 'request', 'pending'], false);

export const getFeedItemsFetchError = (state, subscriptionId) =>
  get(state, ['subscriptions', subscriptionId, 'request', 'error']);

export const getTotalUnreadCount = state => {
  const subscriptions = getSubscriptions(state);
  return getSubscriptionKeys(state).reduce(
    (count, subscriptionId) =>
      count + getUnreadCount(subscriptions[subscriptionId]),
    0,
  );
};
