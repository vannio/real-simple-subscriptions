import { ADD_SUBSCRIPTION } from '../actions';

const subscriptions = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      if (action.subscription.url && action.subscription.title) {
        return state.concat({
          ...action.subscription,
          dateAdded: Date.now()
        });
      }
      return state;
    default:
      return state;
  }
};

export default subscriptions;
