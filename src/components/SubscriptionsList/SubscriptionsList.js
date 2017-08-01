import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions
    })
  )
);

const SubscriptionsList = props => (
  <div className="subscriptions-list">
    <ul>
      {props.subscriptions.map(subscription => (
        <li key={subscription.url}>
          <strong>{subscription.title}</strong>
          <span>{subscription.url}</span>
        </li>
      ))}
    </ul>
  </div>
);

SubscriptionsList.propTypes = {
  subscriptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default enhance(SubscriptionsList);
