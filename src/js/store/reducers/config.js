import { UPDATE_SETTINGS, FETCH_FEEDITEMS_SUCCESS } from '../actions';

const settings = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.settings,
      };
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        latestFetch: Date.now(),
      };
    default:
      return state;
  }
};

export default settings;
