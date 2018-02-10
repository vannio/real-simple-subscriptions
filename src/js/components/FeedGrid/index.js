import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import { getFeedItems } from '../../store/selectors';
import {
  getSubscription,
  isFeedItemsFetching,
  getFeedItemsFetchError,
} from '../../store/selectors';
import * as actions from '../../store/actions';

import FeedGrid from './FeedGrid';

const enhance = compose(
  connect(
    (state, props) => ({
      subscription: getSubscription(state, props.id),
      title: props.title || getSubscription(state, props.id).title,
      isFetching: isFeedItemsFetching(state, props.id),
      fetchError: getFeedItemsFetchError(state, props.id),
      feedItems: props.feedItems || getFeedItems(state, props.id),
    }),
    {
      markAsRead: actions.markAsRead,
      updateUnreadCount: actions.updateUnreadCount,
    },
  ),
  withHandlers({
    onMarkAsReadClick: props => () => {
      props.markAsRead(props.id, props.feedItems.map(feedItem => feedItem.id));
      props.updateUnreadCount(props.id);
    },
  }),
  withProps(props => ({
    feedItems: props.feedItems.slice(0, props.maxCount),
  })),
);

export default enhance(FeedGrid);
