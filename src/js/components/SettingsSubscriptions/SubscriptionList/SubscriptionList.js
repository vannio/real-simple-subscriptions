import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionForm from '../SubscriptionForm';

const SubscriptionList = props => (
  <ul className="unstyled-list">
    {props.subscriptionIds.map(id => {
      const subscription = props.subscriptions[id];
      return subscription ? (
        <li key={id}>
          {props.editableId === id ? (
            <SubscriptionForm
              setEditableId={props.setEditableId}
              subscription={{
                ...subscription,
                id,
              }}
              cta="Update"
            />
          ) : (
            <div onClick={props.onToggleEdit.bind(null, id)}>
              <strong>{subscription.title}</strong>
              {subscription.url}
            </div>
          )}
        </li>
      ) : null;
    })}
  </ul>
);

SubscriptionList.propTypes = {
  subscriptions: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  subscriptionIds: PropTypes.array,
  editableId: PropTypes.string,
  onToggleEdit: PropTypes.func,
};

export default SubscriptionList;
