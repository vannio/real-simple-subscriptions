import { combineReducers } from 'redux';
import settings from './settings';
import subscriptions from './subscriptions';
import feedItems from './feedItems';
import markedFeedItems from './markedFeedItems';

const reducers = combineReducers({
  settings,
  subscriptions,
  feedItems,
  markedFeedItems
});

export default reducers;
