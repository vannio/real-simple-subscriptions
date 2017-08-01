import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const enhance = compose(
  withState('feedTitle', 'setFeedTitle', props => props.subscription ? props.subscription.title : ''),
  withState('feedUrl', 'setFeedUrl', props => props.subscription ? props.subscription.url : ''),
  withHandlers({
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { feedTitle, feedUrl, subscription } = props;
      props.handleSubmit({ title: feedTitle, url: feedUrl, id: subscription && subscription.id });
      props.setFeedTitle('');
      props.setFeedUrl('');
    }
  })
);
export const SubscriptionsForm = props => (
  <form onSubmit={props.onSubmitForm}>
    <div>
      <label htmlFor="feedTitle">Title</label>
      <input type="text" id="feedTitle" onChange={props.onFeedTitleChange} value={props.feedTitle} required />
    </div>
    <div>
      <label htmlFor="feedUrl">URL</label>
      <input type="url" id="feedUrl" onChange={props.onFeedUrlChange} value={props.feedUrl} required />
    </div>
    <button type="submit">{props.cta || 'subscribe'}</button>
  </form>
);

SubscriptionsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  onFeedTitleChange: PropTypes.func,
  onFeedUrlChange: PropTypes.func,
  feedTitle: PropTypes.string,
  feedUrl: PropTypes.string,
  cta: PropTypes.string
};

export default enhance(SubscriptionsForm);
