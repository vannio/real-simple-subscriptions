export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  settings
});

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const addSubscription = subscription => ({
  type: ADD_SUBSCRIPTION,
  subscription
});
