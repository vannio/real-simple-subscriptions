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
  withState('isFormNewExpanded', 'setIsFormNewExpanded', false),
  withHandlers({
    onToggleFormNewExpanded: props => () => props.setIsFormNewExpanded(!props.isFormNewExpanded),
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    onAddSubscription: props => subscription => {
      props.addSubscription(subscription);
      props.setIsFormNewExpanded(false);
    },
    onUpdateSubscription: props => subscription => props.updateSubscription(subscription)
  })
);

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <h1>Subscriptions</h1>
    <div className="settings-subscriptions__group">
      {props.isFormNewExpanded ? (
        <Form handleSubmit={props.onAddSubscription}>
          <button type="button" className="button" onClick={props.onToggleFormNewExpanded}>Close</button>
        </Form>
      ) : (
        <button className="button" onClick={props.onToggleFormNewExpanded}>
          Add subscription
        </button>
      )}
      <List />
    </div>
  </div>
);

SettingsSubscriptions.propTypes = {
  onAddSubscription: PropTypes.func,
  onUpdateSubscription: PropTypes.func,
  isFormNewExpanded: PropTypes.bool,
  onToggleFormNewExpanded: PropTypes.func,
  onToggleBookmarkFormExpanded: PropTypes.func,
};

export default enhance(SettingsSubscriptions);
