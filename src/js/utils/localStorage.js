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

const getLS = (localStorage = {}, key) => {
  const data = localStorage[key];
  try {
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
};

export const migrate = (key, localStorage = {}) => {
  if (!localStorage.config) {
    throw new Error('No config found');
  }

  const currentStorage = getLS(localStorage, key);

  if (key === 'config') {
    const isv1 = !!currentStorage.settings;
    if (isv1) {
      return {
        ...INITIAL_STATE[key],
        ...currentStorage.settings,
      };
    }
  }

  if (key === 'subscriptions') {
    const isv1 = !currentStorage.subscriptions;
    const v1subscriptions = getLS(localStorage, 'config').subscriptions;
    const hasv2subscriptions = Object.keys(currentStorage).length > 0;

    if (isv1 && !hasv2subscriptions) {
      if (!v1subscriptions) {
        throw new Error('No subscriptions found');
      }
      return mapv1Subscriptions(v1subscriptions);
    }
  }
  return currentStorage;
};

export const loadState = (key = 'config') => {
  try {
    return migrate(key, window.localStorage);
  } catch (err) {
    return INITIAL_STATE[key] || {};
  }
};

export const saveState = (state, key = 'config') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log('ERROR', err);
  }
};
