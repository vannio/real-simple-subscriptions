import uuid from 'uuid/v5';
import omit from 'lodash/fp/omit';
import {
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  FETCH_FEEDITEMS_SUCCESS,
} from '../actions/index';

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
          items: action.items,
        },
      };
    default:
      return state;
  }
};

export default subscriptions;
