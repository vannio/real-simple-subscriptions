import { DEFAULT_STATE } from '../data';

export const loadState = (key = 'config') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return DEFAULT_STATE[key];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return DEFAULT_STATE[key];
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

export default { saveState, loadState };
