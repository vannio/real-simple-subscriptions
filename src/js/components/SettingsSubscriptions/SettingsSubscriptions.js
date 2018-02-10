import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';

import './SettingsSubscriptions.css';

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <h1>Subscriptions</h1>
    <div className="settings-subscriptions__group">
      {props.isFormNewExpanded ? (
        <Form handleSubmit={props.onAddSubscription}>
          <button
            type="button"
            className="button"
            onClick={props.onToggleFormNewExpanded}>
            Close
          </button>
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

export default SettingsSubscriptions;
