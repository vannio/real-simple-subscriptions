import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const enhance = compose(
  connect(
    null,
    { addSubscription: actions.addSubscription }
  ),
  withState('feedTitle', 'setFeedTitle', ''),
  withState('feedUrl', 'setFeedUrl', ''),
  withHandlers({
    onFeedTitleChange: props => e => props.setFeedTitle(e.target.value),
    onFeedUrlChange: props => e => props.setFeedUrl(e.target.value),
    onSubmitForm: props => e => {
      e.preventDefault();
      var { feedTitle, feedUrl } = props;
      props.addSubscription({ title: feedTitle, url: feedUrl });
      props.setFeedTitle('');
      props.setFeedUrl('');
    }
  })
);

export const SubscriptionsForm = props => (
  <div className="subscriptions-form">
    <h3>Subscriptions</h3>
    <form onSubmit={props.onSubmitForm}>
      <div>
        <label htmlFor="feedTitle">Title</label>
        <input type="text" id="feedTitle" onChange={props.onFeedTitleChange} value={props.feedTitle} />
      </div>
      <div>
        <label htmlFor="feedUrl">URL</label>
        <input type="text" id="feedUrl" onChange={props.onFeedUrlChange} value={props.feedUrl} />
      </div>
      <button type="submit">subscribe</button>
    </form>
  </div>
);

SubscriptionsForm.propTypes = {
  onSubmitForm: PropTypes.func,
  onFeedTitleChange: PropTypes.func,
  onFeedUrlChange: PropTypes.func,
  feedTitle: PropTypes.string,
  feedUrl: PropTypes.string
};

export default enhance(SubscriptionsForm);
