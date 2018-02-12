import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import isEqual from 'lodash/isEqual';
import {
  getSubscriptions,
  getSubscriptionKeys,
  getBookmarkedItemsCount,
} from '../../store/selectors/subscriptions';
import { markAllAsRead } from '../../store/actions/subscriptions';
import { fetchAllFeedItems } from '../../utils/chrome';
import Sidebar from './Sidebar';

const enhance = compose(
  connect(
    state => ({
      subscriptions: getSubscriptions(state),
      subscriptionIds: getSubscriptionKeys(state),
      bookmarkedItemCount: getBookmarkedItemsCount(state),
    }),
    { markAllAsRead },
  ),
  withHandlers({
    fetchAllFeedItems: () => () => fetchAllFeedItems(true),
    onMarkAsReadClick: props => () => {
      props.subscriptionIds.forEach(subscriptionId => {
        props.markAllAsRead(subscriptionId);
      });
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const hasSubscriptionChanged = !isEqual(
        this.props.subscriptionIds,
        nextProps.subscriptionIds,
      );
      if (hasSubscriptionChanged) {
        this.props.fetchAllFeedItems(true);
      }
    },
  }),
);

export default enhance(Sidebar);
