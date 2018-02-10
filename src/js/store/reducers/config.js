import { UPDATE_CONFIG } from '../actions/config';
import { FETCH_FEEDITEMS_SUCCESS } from '../actions/subscriptions';

const config = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CONFIG:
      return {
        ...state,
        ...action.config,
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

export default config;
