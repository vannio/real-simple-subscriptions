import { combineReducers } from 'redux';
import config from './config';
import subscriptions from './subscriptions';

const reducers = combineReducers({
  config,
  subscriptions,
});

export default reducers;
