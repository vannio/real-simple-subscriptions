import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const enhance = connect(
  (state, ownProps) => ({
    subscription: state.subscriptions[ownProps.id]
  })
);

export const SubscriptionPreview = ({ subscription }) => (
  <div className="subscription-preview">
    <p>{subscription.url}</p>
  </div>
);

SubscriptionPreview.propTypes = {
  subscription: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  })
};

export default enhance(SubscriptionPreview);
