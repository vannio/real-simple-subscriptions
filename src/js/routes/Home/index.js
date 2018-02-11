import { connect } from 'react-redux';
import { getSubscriptionKeys } from '../../store/selectors/subscriptions';
import { getConfig } from '../../store/selectors/config';

import Home from './Home';

const enhance = connect(state => ({
  subscriptions: state.subscriptions,
  subscriptionIds: getSubscriptionKeys(state),
  config: getConfig(state),
}));

export default enhance(Home);

