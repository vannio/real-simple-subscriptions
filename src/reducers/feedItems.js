import omit from 'lodash/fp/omit';
import uniq from 'lodash/fp/uniq';
import {
  FETCH_FEEDITEMS_REQUEST,
  FETCH_FEEDITEMS_SUCCESS,
  FETCH_FEEDITEMS_FAILURE,
  DELETE_SUBSCRIPTION,
  MARK_FEEDITEM_READ,
  UPDATE_UNREAD_COUNT
} from '../actions';

const feedItems = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEEDITEMS_REQUEST:
      return {
        ...state,
        [action.subscriptionId]: {
          ...omit('error')(state[action.subscriptionId]),
          fetching: true
        }
      };
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        [action.subscriptionId]: {
          ...omit(['error', 'fetching'])(state[action.subscriptionId]),
          items: action.items
        }
      };
    case FETCH_FEEDITEMS_FAILURE:
      return {
        ...state,
        [action.subscriptionId]: {
          ...omit('fetching')(state[action.subscriptionId]),
          error: action.error
        }
      };
    case DELETE_SUBSCRIPTION:
      return omit(action.subscriptionId)(state);
    case MARK_FEEDITEM_READ:
      var readItems = state[action.subscriptionId].markedAsRead || [];
      var markedAsRead = uniq(readItems.concat(action.ids));
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          markedAsRead
        }
      };
    case UPDATE_UNREAD_COUNT:
      var items = state[action.subscriptionId].items || [];
      var itemIds = items.map(item => item.id);
      readItems = state[action.subscriptionId].markedAsRead || [];
      const unreadItemIds = itemIds.filter(entry => !readItems.includes(entry));
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          unreadCount: unreadItemIds.length
        }
      };
    default:
      return state;
  }
};

export default feedItems;
