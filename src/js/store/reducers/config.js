import { UPDATE_SETTINGS } from '../actions/config';
import { FETCH_FEEDITEMS_SUCCESS } from '../actions/subscriptions';

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
