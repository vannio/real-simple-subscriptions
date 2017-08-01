import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SubscriptionsForm from './SubscriptionsForm';
import SubscriptionsList from './SubscriptionsList';

const enhance = compose(
  connect(
    null,
    { addSubscription: actions.addSubscription }
  ),
  withHandlers({
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    handleAddSubscription: props => subscription => props.addSubscription(subscription),
    handleUpdateSubscription: props => subscription => props.updateSubscription(subscription),
  })
);

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <SubscriptionsForm handleSubmit={props.handleAddSubscription} />
    <SubscriptionsList />
  </div>
);

SettingsSubscriptions.propTypes = {
  handleAddSubscription: PropTypes.func,
  handleUpdateSubscription: PropTypes.func
};

export default enhance(SettingsSubscriptions);
