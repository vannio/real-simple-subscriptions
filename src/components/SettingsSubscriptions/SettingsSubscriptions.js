import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Form from './Form';
import List from './List';

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

export const SettingsSubscriptions = ({ handleAddSubscription }) => (
  <div className="settings-subscriptions">
    <h2>Subscriptions</h2>
    <Form handleSubmit={handleAddSubscription} />
    <List />
  </div>
);

SettingsSubscriptions.propTypes = {
  handleAddSubscription: PropTypes.func,
  handleUpdateSubscription: PropTypes.func
};

export default enhance(SettingsSubscriptions);
