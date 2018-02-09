import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { getSubscriptionKeys, getBookmarkedItemsCount } from '../../ducks';
import { fetchAllFeedItems } from '../../utils/chrome';
import * as actions from '../../actions';

import Sidebar from './Sidebar';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions,
      subscriptionIds: getSubscriptionKeys(state),
      allFeedItems: state.feedItems,
      bookmarkedItemCount: getBookmarkedItemsCount(state),
    }),
    {
      markAsRead: actions.markAsRead,
      updateUnreadCount: actions.updateUnreadCount,
    },
  ),
  withHandlers({
    fetchAllFeedItems: () => () => fetchAllFeedItems(),
    onMarkAsReadClick: props => () => {
      props.subscriptionIds.forEach(subscriptionId => {
        if (!props.subscriptions[subscriptionId].error) {
          const itemIDs = props.allFeedItems[subscriptionId].items.map(
            item => item.id,
          );
          props.markAsRead(subscriptionId, itemIDs);
          props.updateUnreadCount(subscriptionId);
        }
      });
    },
  }),
);

export default enhance(Sidebar);
