import {
  FETCH_FEEDITEMS_REQUEST,
  FETCH_FEEDITEMS_SUCCESS,
  FETCH_FEEDITEMS_FAILURE }
from '../actions';

const feedItems = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEEDITEMS_REQUEST:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          fetching: true,
          error: null
        }
      };
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          items: action.items,
          fetching: false,
          error: null
        }
      };
    case FETCH_FEEDITEMS_FAILURE:
      return {
        ...state,
        [action.subscriptionId]: {
          ...state[action.subscriptionId],
          items: action.items,
          fetching: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export default feedItems;
