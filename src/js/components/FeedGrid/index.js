import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import {
  getFeedItems,
  getSubscription,
  isFeedItemsFetching,
  getFeedItemsFetchError,
} from '../../store/selectors/subscriptions';
import { markAllAsRead } from '../../store/actions/subscriptions';

import FeedGrid from './FeedGrid';

const enhance = compose(
  connect(
    (state, props) => {
      const subscription = getSubscription(state, props.id);
      return {
        title: props.title || subscription.title,
        isFetching: isFeedItemsFetching(state, props.id),
        fetchError: getFeedItemsFetchError(state, props.id),
        feedItems: props.feedItems || getFeedItems(state, props.id),
      };
    },
    { markAllAsRead },
  ),
  withHandlers({
    onMarkAsReadClick: props => () => props.markAllAsRead(props.id),
  }),
  withProps(props => ({
    feedItems: props.feedItems.slice(0, props.maxCount),
  })),
);

export default enhance(FeedGrid);
