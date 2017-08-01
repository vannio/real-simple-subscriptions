import { UPDATE_SETTINGS } from '../actions';

const settings = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      var newState = {
        ...state,
        ...action.settings
      };
      return newState;
    default:
      return state;
  }
};

export default settings;
