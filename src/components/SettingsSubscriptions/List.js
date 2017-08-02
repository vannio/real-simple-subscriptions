import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Form from './Form';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions
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
      props.deleteSubscription(id);
      props.setEditableId('');
    },
    onStopEditing: props => () => props.setEditableId('')
  })
);

const List = props => (
  <ul className="settings-subscriptions__list">
    {Object.keys(props.subscriptions).map(id => {
      const subscription = props.subscriptions[id];
      return (
        <li key={id}>
          {props.editableId === id ? (
            <Form
              subscription={subscription}
              cta="update"
              handleSubmit={props.onSubmitForm.bind(null, id)}>
              <button type="button" onClick={props.onDeleteSubscription.bind(null, id)}>delete</button>
              <button type="button" onClick={props.onStopEditing}>close</button>
            </Form>
          ) : (
            <div onClick={props.onToggleEdit.bind(null, id)}>
              <strong>{subscription.title}</strong>
              {subscription.url}
            </div>
          )}
        </li>
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
  editableId: PropTypes.string,
  onToggleEdit: PropTypes.func
};

export default enhance(List);
