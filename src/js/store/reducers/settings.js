import { UPDATE_SETTINGS } from '../actions/index';

const settings = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.settings
      };
    default:
      return state;
  }
};

export default settings;
