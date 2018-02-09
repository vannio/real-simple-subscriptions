import { connect } from 'react-redux';
import { getSubscriptionKeys } from '../../ducks';

import FeedGridList from './FeedGridList';

const enhance = connect(state => ({
  subscriptions: state.subscriptions,
  subscriptionIds: getSubscriptionKeys(state),
  maxCount: state.settings.maxCount,
}));

export default enhance(FeedGridList);
