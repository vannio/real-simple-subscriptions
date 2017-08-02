import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import ListItem from './ListItem';
import * as actions from '../../actions';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      subscription: state.subscriptions[ownProps.id],
      feedItems: state.feedItems[ownProps.id]
    }),
    { fetchFeedItems: actions.fetchFeedItems }
  ),
  withHandlers({
    fetchData: props => () => props.fetchFeedItems(props.id, props.subscription.url)
  })
);

export const SubscriptionPreview = props => (
  <div className="subscription-preview">
    <h1>{props.subscription.title}</h1>
    <button onClick={props.fetchData}>Manually fetch data</button>
    <ul className="subscription-preview__list">
      {props.feedItems && props.feedItems.slice(0, props.maxCount).map(item => (
        <ListItem key={item.timeStamp} item={item} />
      ))}
    </ul>
  </div>
);

SubscriptionPreview.propTypes = {
  subscription: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }),
  feedItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.number,
      url: PropTypes.string
    })
  ),
  fetchData: PropTypes.func,
  maxCount: PropTypes.number
};

export default enhance(SubscriptionPreview);
