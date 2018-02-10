import { connect } from 'react-redux';
import { getSubscriptionKeys } from '../../store/selectors';

import FeedGridList from './FeedGridList';

const enhance = connect(state => {
  const subscriptionIds = getSubscriptionKeys(state);
  return {
    subscriptionIds,
    hasSubscriptions: subscriptionIds.length > 0,
    maxCount: state.config.maxCount,
  };
});

export default enhance(FeedGridList);
