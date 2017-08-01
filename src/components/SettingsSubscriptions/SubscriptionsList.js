import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SubscriptionsForm from './SubscriptionsForm';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions
    }),
    { updateSubscription: actions.updateSubscription }
  ),
  withState('editableId', 'setEditableId', ''),
  withHandlers({
    onToggleEdit: props => e => props.setEditableId(e.target.id),
    onSubmitForm: props => subscription => {
      props.updateSubscription(subscription);
      props.setEditableId('');
    }
  })
);

const SubscriptionsList = props => (
  <div className="subscriptions-list">
    <ul>
      {Object.keys(props.subscriptions).map(id => {
        const subscription = props.subscriptions[id];
        return (
          <li key={id}>
            {props.editableId === id ? (
              <SubscriptionsForm
                handleSubmit={props.onSubmitForm}
                subscription={subscription}
                subscriptionId={id}
                cta="update" />
            ) : (
              <div onClick={props.onToggleEdit} id={id}>
                <strong>{subscription.title}</strong>
                {subscription.url}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

SubscriptionsList.propTypes = {
  subscriptions: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  }),
  editableId: PropTypes.string,
  onToggleEdit: PropTypes.func
};

export default enhance(SubscriptionsList);
