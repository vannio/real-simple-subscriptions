import { INITIAL_STATE } from '../../config';

export const loadState = (key = 'config') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return INITIAL_STATE[key];
    }
    return JSON.parse(serializedState);
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
