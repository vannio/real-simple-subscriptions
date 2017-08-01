import { combineReducers } from 'redux';
import settings from './settings';
import subscriptions from './subscriptions';

const reducers = combineReducers({
  settings,
  subscriptions
});

export default reducers;
