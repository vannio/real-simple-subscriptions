export const defaultState = {
  state: {
    subscriptions: {},
    settings: {
      maxCount: 3,
      readOnOpen: true,
      fetchInterval: 30,
      accentColour: 'Pink'
    }
  },
  cachedData: {},
  markedFeedItems: []
};

export const loadState = (key = 'state') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return defaultState[key];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultState;
  }
};

export const saveState = (state, key = 'state') => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export default { saveState, loadState };
