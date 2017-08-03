import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Form from './Form';
import List from './List';
import './styles.css';

const enhance = compose(
  connect(null, { addSubscription: actions.addSubscription }),
  withState('isFormExpanded', 'setIsFormExpanded', false),
  withHandlers({
    onToggleFormExpanded: props => id => props.setIsFormExpanded(!props.isFormExpanded),
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    handleAddSubscription: props => subscription => {
      props.addSubscription(subscription);
      props.setIsFormExpanded(false);
    },
    handleUpdateSubscription: props => subscription => props.updateSubscription(subscription),
  })
);

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <h2>Subscriptions</h2>
    {props.isFormExpanded ? (
      <Form handleSubmit={props.handleAddSubscription} />
    ) : (
      <button className="button" onClick={props.onToggleFormExpanded}>
        Add subscription
      </button>
    )}
    <List />
  </div>
);

SettingsSubscriptions.propTypes = {
  handleAddSubscription: PropTypes.func,
  handleUpdateSubscription: PropTypes.func,
  isFormExpanded: PropTypes.bool,
  onToggleFormExpanded: PropTypes.func
};

export default enhance(SettingsSubscriptions);
