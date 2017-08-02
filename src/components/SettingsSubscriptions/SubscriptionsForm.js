import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const enhance = compose(
  withState('subscriptionTitle', 'setSubscriptionTitle', props => props.subscription ? props.subscription.title : ''),
  withState('subscriptionUrl', 'setSubscriptionUrl', props => props.subscription ? props.subscription.url : ''),
  withHandlers({
    onSubscriptionTitleChange: props => e => props.setSubscriptionTitle(e.target.value),
    onSubscriptionUrlChange: props => e => props.setSubscriptionUrl(e.target.value),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { subscriptionTitle, subscriptionUrl } = props;
      props.handleSubmit({ title: subscriptionTitle, url: subscriptionUrl });
      props.setSubscriptionTitle('');
      props.setSubscriptionUrl('');
    }
  })
);
export const SubscriptionsForm = props => (
  <form onSubmit={props.onSubmitForm}>
    <div>
      <label htmlFor="subscriptionTitle">Title</label>
      <input type="text"
        id="subscriptionTitle"
        onChange={props.onSubscriptionTitleChange}
        value={props.subscriptionTitle} required />
    </div>
    <div>
      <label htmlFor="subscriptionUrl">URL</label>
      <input type="url"
        id="subscriptionUrl"
        onChange={props.onSubscriptionUrlChange}
        value={props.subscriptionUrl} required />
    </div>
    <button type="submit">{props.cta || 'submit'}</button>
    {props.children}
  </form>
);

SubscriptionsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  onSubscriptionTitleChange: PropTypes.func,
  onSubscriptionUrlChange: PropTypes.func,
  subscriptionTitle: PropTypes.string,
  subscriptionUrl: PropTypes.string,
  cta: PropTypes.string,
  children: PropTypes.node
};

export default enhance(SubscriptionsForm);
