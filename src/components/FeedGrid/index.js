import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { getFeedItems } from '../../ducks';
import {
  getSubscription,
  isFeedItemsFetching,
  getFeedItemsFetchError,
} from '../../ducks';
import * as actions from '../../actions';

import FeedGrid from './FeedGrid';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      subscription: getSubscription(state, ownProps.id),
      title: ownProps.title || getSubscription(state, ownProps.id).title,
      isFetching: isFeedItemsFetching(state, ownProps.id),
      fetchError: getFeedItemsFetchError(state, ownProps.id),
      feedItems: ownProps.feedItems || getFeedItems(state, ownProps.id),
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
);

export default enhance(FeedGrid);
