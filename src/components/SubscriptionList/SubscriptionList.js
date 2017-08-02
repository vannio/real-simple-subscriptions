import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../SubscriptionPreview/SubscriptionPreview';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions,
    maxCount: state.settings.maxCount
  })
);

export const SubscriptionList = ({ subscriptions, maxCount }) => (
  <div className="subscription-list">
    {Object.keys(subscriptions).map(id => (
      <SubscriptionPreview key={id} id={id} maxCount={maxCount} />
    ))}
  </div>
);

SubscriptionList.propTypes = {
  subscriptions: PropTypes.object,
  maxCount: PropTypes.number
};

export default enhance(SubscriptionList);
