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
      const readItems = state[action.subscriptionId].markedAsRead || [];
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          markedAsRead: uniq(readItems.concat(action.ids))
        }
      };
    case UPDATE_UNREAD_COUNT:
      console.log('action', action, 'state', state);
      return state;
    default:
      return state;
  }
};

export default feedItems;
