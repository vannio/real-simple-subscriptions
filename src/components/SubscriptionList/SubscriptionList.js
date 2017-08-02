import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../SubscriptionPreview/SubscriptionPreview';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions
  })
);

export const SubscriptionList = ({ subscriptions }) => (
  <div className="subscription-list">
    {Object.keys(subscriptions).map(id => (
      <SubscriptionPreview key={id} id={id} />
    ))}
  </div>
);

SubscriptionList.propTypes = {
  subscriptions: PropTypes.object
};

export default enhance(SubscriptionList);
