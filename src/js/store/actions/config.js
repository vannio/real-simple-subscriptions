export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const updateSettings = config => ({
  type: UPDATE_CONFIG,
  config,
});

export const saveConfig = config => dispatch => {
  dispatch(updateSettings(config));
  window.document.documentElement.dataset.colour = config.accentColour.toLowerCase();
};
