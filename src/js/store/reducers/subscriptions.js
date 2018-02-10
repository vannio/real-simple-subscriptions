import uuid from 'uuid/v5';
import omit from 'lodash/fp/omit';
import uniq from 'lodash/uniqBy';
import {
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  FETCH_FEEDITEMS_PENDING,
  FETCH_FEEDITEMS_SUCCESS,
  FETCH_FEEDITEMS_FAIL,
  TOGGLE_FEEDITEM_READ,
  MARK_ALL_FEEDITEMS_READ,
  TOGGLE_BOOKMARK_FEEDITEM,
} from '../actions/subscriptions';

const subscriptions = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      return {
        ...state,
        [uuid(action.subscription.url, uuid.URL)]: {
          ...action.subscription,
          dateAdded: Date.now(),
          items: [],
          markedAsRead: [],
          bookmarked: [],
        },
      };
    case UPDATE_SUBSCRIPTION:
      return {
        ...state,
        [action.subscription.id]: {
          ...state[action.subscription.id],
          title: action.subscription.title,
          url: action.subscription.url,
        },
      };
    case DELETE_SUBSCRIPTION:
      return omit(action.subscriptionId)(state);

    case FETCH_FEEDITEMS_PENDING:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          request: {
            pending: true,
          },
        },
      };
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          items: uniq(
            [
              ...state[action.subscriptionId].items,
              action.items.map(item => ({
                ...item,
                id: uuid(item.link || item.guid, uuid.URL),
              })),
            ],
            'id',
          ),
          request: {
            pending: false,
          },
        },
      };
    case FETCH_FEEDITEMS_FAIL:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          request: {
            pending: false,
            error: action.error,
          },
        },
      };

    case TOGGLE_FEEDITEM_READ:
      let itemId = action.feedItemId;
      let subscription = state[action.subscriptionId];
      return {
        ...state,
        [action.subscriptionId]: {
          ...subscription,
          markedAsRead: subscription.markedAsRead.includes(itemId)
            ? subscription.markedAsRead.filter(id => id !== itemId)
            : subscription.markedAsRead.concat(itemId),
        },
      };
    case MARK_ALL_FEEDITEMS_READ:
      subscription = state[action.subscriptionId];
      let feedItemIds = subscription.items.map(item => item.id);
      return {
        ...state,
        [action.subscriptionId]: {
          ...subscription,
          markedAsRead: uniq(subscription.markedAsRead.concat(feedItemIds)),
        },
      };
    case TOGGLE_BOOKMARK_FEEDITEM:
      itemId = action.feedItemId;
      subscription = state[action.subscriptionId];
      return {
        ...state,
        [action.subscriptionId]: {
          ...subscription,
          bookmarked: subscription.bookmarked.includes(itemId)
            ? subscription.bookmarked.filter(id => id !== itemId)
            : subscription.bookmarked.concat(itemId),
        },
      };

    default:
      return state;
  }
};

export default subscriptions;
