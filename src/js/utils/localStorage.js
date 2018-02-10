import { INITIAL_STATE } from '../../config';

const mapv1Subscriptions = subscriptions => {
  if (!subscriptions) {
    return null;
  }
  const v1subscriptionKeys = Object.keys(subscriptions);
  return v1subscriptionKeys.reduce(
    (obj, key) => ({
      ...obj,
      [key]: {
        ...subscriptions[key],
        items: [],
        markedAsRead: [],
        bookmarked: [],
      },
    }),
    {},
  );
};

export const loadState = (key = 'config') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState && key !== 'subscriptions') {
      return INITIAL_STATE[key];
    }
    if (key === 'subscriptions') {
      const v1config = localStorage.getItem('config');
      if (!v1config) {
        return INITIAL_STATE[key];
      }
      const v1subscriptions = mapv1Subscriptions(
        JSON.parse(v1config).subscriptions,
      );
      if (!v1subscriptions) {
        return INITIAL_STATE[key];
      }
      return v1subscriptions;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return INITIAL_STATE[key];
  }
};

export const saveState = (state, key = 'config') => {
  console.log(state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};
