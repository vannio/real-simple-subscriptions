import uuid from 'uuid/v5';
import omit from 'lodash/fp/omit';
import {
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  FETCH_FEEDITEMS_SUCCESS,
  TOGGLE_FEEDITEM_READ,
  TOGGLE_BOOKMARK_FEEDITEM,
} from '../actions';

const subscriptions = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      return {
        ...state,
        [uuid(action.subscription.url, uuid.URL)]: {
          ...action.subscription,
          dateAdded: Date.now(),
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
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          // items: [...state[action.subscriptionId].items, ...action.items],
          items: action.items.map(item => ({
            ...item,
            id: uuid(item.link || item.guid, uuid.URL),
          })),
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
