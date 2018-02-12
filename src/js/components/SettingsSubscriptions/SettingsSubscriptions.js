import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionForm from './SubscriptionForm';
import SubscriptionList from './SubscriptionList';

import './SettingsSubscriptions.css';

export const SettingsSubscriptions = props => (
  <div className="settings-subscriptions">
    <h1>Subscriptions</h1>
    <div className="settings-subscriptions__group">
      {props.isFormNewExpanded ? (
        <SubscriptionForm setIsFormNewExpanded={props.setIsFormNewExpanded} />
      ) : (
        <button className="button" onClick={props.onToggleFormNewExpanded}>
          Add subscription
        </button>
      )}
      <SubscriptionList />
    </div>
  </div>
);

SettingsSubscriptions.propTypes = {
  onAddSubscription: PropTypes.func,
  onUpdateSubscription: PropTypes.func,
  isFormNewExpanded: PropTypes.bool,
  setIsFormNewExpanded: PropTypes.func,
  onToggleFormNewExpanded: PropTypes.func,
  onToggleBookmarkFormExpanded: PropTypes.func,
};

export default SettingsSubscriptions;
