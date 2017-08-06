import { combineReducers } from 'redux';
import settings from './settings';
import subscriptions from './subscriptions';
import feedItems from './feedItems';

const reducers = combineReducers({
  settings,
  subscriptions,
  feedItems
});

export default reducers;
