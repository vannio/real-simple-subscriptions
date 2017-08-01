import { ADD_SUBSCRIPTION, UPDATE_SUBSCRIPTION } from '../actions';
import uuid from 'uuid/v4';

const subscriptions = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      if (action.subscription.url && action.subscription.title) {
        return {
          ...state,
          [uuid()]: {
            ...action.subscription,
            dateAdded: Date.now()
          }
        };
      }
      return state;
    case UPDATE_SUBSCRIPTION:
      if (action.subscription.url && action.subscription.title) {
        return {
          ...state,
          [action.subscription.id]: {
            ...state[action.subscription.id],
            title: action.subscription.title,
            url: action.subscription.url
          }
        };
      }
      return state;
    default:
      return state;
  }
};

export default subscriptions;
