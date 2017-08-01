import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import SubscriptionsForm from './SubscriptionsForm';

const enhance = compose(
  connect(
    state => ({
      subscriptions: state.subscriptions
    })
  ),
  withState('editableId', 'setIsEditable', ''),
  withHandlers({
    onToggleEdit: props => e => props.setIsEditable(e.target.id),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { feedTitle, feedUrl } = props;
      props.handleSubmit({ title: feedTitle, url: feedUrl });
      props.setIsEditable(false);
    }
  })
);

const SubscriptionsList = props => (
  <div className="subscriptions-list">
    <ul>
      {props.subscriptions.map(subscription => (
        <li key={subscription.id}>
          {props.editableId === subscription.id ? (
            <SubscriptionsForm
              handleSubmit={() => {}}
              subscription={subscription}
              cta="update" />
          ) : (
            <div onClick={props.onToggleEdit} id={subscription.id}>
              <strong>{subscription.title}</strong>
              {subscription.url}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

SubscriptionsList.propTypes = {
  subscriptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  editableId: PropTypes.string,
  onToggleEdit: PropTypes.func
};

export default enhance(SubscriptionsList);
