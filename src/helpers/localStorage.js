export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key || 'state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key || 'state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export default { saveState, loadState };
