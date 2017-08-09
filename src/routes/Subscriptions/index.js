import React from 'react';
import Show from './Show';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';
import { getSubscriptionKeys } from '../../ducks';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions,
    subscriptionIds: getSubscriptionKeys(state.subscriptions),
    maxCount: state.settings.maxCount,
    hideRead: state.settings.hideRead
  })
);

export const SubscriptionList = ({ subscriptions, subscriptionIds, maxCount }) => (
  <div className="subscription-list">
    {subscriptionIds.length > 0 ? (
      subscriptionIds.map(id => (
        <SubscriptionPreview key={id} id={id} maxCount={maxCount} />
      ))
    ) : (
      <div>
        <h1>Nothing to see here...</h1>
        <p>Add some feeds to get started!</p>
      </div>
    )}
  </div>
);

SubscriptionList.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  maxCount: PropTypes.number
};

export default {
  index: enhance(SubscriptionList),
  show: Show
};
