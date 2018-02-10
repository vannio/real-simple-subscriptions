import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/subscriptions';
import Form from './Form';
import { getSubscriptionKeys } from '../../store/selectors/subscriptions';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions,
      subscriptionIds: getSubscriptionKeys(state)
    }),
    {
      updateSubscription: actions.updateSubscription,
      deleteSubscription: actions.deleteSubscription
    }
  ),
  withState('editableId', 'setEditableId', ''),
  withHandlers({
    onToggleEdit: props => id => props.setEditableId(id),
    onSubmitForm: props => (id, subscription) => {
      props.updateSubscription({ ...subscription, id});
      props.setEditableId('');
    },
    onDeleteSubscription: props => id => {
      props.setEditableId('');
      props.deleteSubscription(id);
    },
    onStopEditing: props => () => props.setEditableId('')
  })
);

const List = props => (
  <ul className="unstyled-list">
    {props.subscriptionIds.map(id => {
      const subscription = props.subscriptions[id];
      return subscription ? (
        <li key={id}>
          {props.editableId === id ? (
            <Form
              subscription={subscription}
              cta="Update"
              handleSubmit={props.onSubmitForm.bind(null, id)}>
              <button type="button"
                onClick={props.onDeleteSubscription.bind(null, id)}
                className="button">
                Delete
              </button>
              <button type="button"
                onClick={props.onStopEditing}
                className="button">
                Close
              </button>
            </Form>
          ) : (
            <div onClick={props.onToggleEdit.bind(null, id)}>
              <strong>{subscription.title}</strong>
              {subscription.url}
            </div>
          )}
        </li>
      ) : (
        null
      );
    })}
  </ul>
);

List.propTypes = {
  subscriptions: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  }),
  subscriptionIds: PropTypes.array,
  editableId: PropTypes.string,
  onToggleEdit: PropTypes.func
};

export default enhance(List);
