import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../SubscriptionPreview/SubscriptionPreview';
import { getSubscriptionKeys } from '../../ducks';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions,
    subscriptionIds: getSubscriptionKeys(state.subscriptions),
    maxCount: state.settings.maxCount
  })
);

export const SubscriptionList = ({ subscriptions, subscriptionIds, maxCount }) => (
  <div className="subscription-list">
    {subscriptionIds.map(id => (
      <SubscriptionPreview key={id} id={id} maxCount={maxCount} />
    ))}
  </div>
);

SubscriptionList.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  maxCount: PropTypes.number
};

export default enhance(SubscriptionList);
