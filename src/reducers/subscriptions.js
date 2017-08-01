import { ADD_SUBSCRIPTION, UPDATE_SUBSCRIPTION } from '../actions';
import uuid from 'uuid/v4';

const subscriptions = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      if (action.subscription.url && action.subscription.title) {
        return state.concat({
          ...action.subscription,
          dateAdded: Date.now(),
          id: uuid()
        });
      }
      return state;
    case UPDATE_SUBSCRIPTION:
      if (action.subscription.url && action.subscription.title) {
        console.log(action.subscription);
      }
      return state;
    default:
      return state;
  }
};

export default subscriptions;
