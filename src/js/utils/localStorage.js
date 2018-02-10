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
      localStorage.removeItem('data');
      return v1subscriptions;
    }
    const parsed = JSON.parse(serializedState);
    if (key === 'config' && parsed.settings) {
      return {
        ...INITIAL_STATE[key],
        ...parsed.settings,
        latestFetch: 0,
      };
    }
    return parsed;
  } catch (err) {
    return INITIAL_STATE[key];
  }
};

export const saveState = (state, key = 'config') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};
