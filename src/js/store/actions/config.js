// SETTINGS
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  settings,
});

export const saveConfig = config => dispatch => {
  dispatch(updateSettings(config));
  window.document.documentElement.dataset.colour = config.accentColour.toLowerCase();
};
