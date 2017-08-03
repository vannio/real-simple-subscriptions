import omit from 'lodash/fp/omit';
import {
  FETCH_FEEDITEMS_REQUEST,
  FETCH_FEEDITEMS_SUCCESS,
  FETCH_FEEDITEMS_FAILURE,
  DELETE_SUBSCRIPTION
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
    default:
      return state;
  }
};

export default feedItems;
