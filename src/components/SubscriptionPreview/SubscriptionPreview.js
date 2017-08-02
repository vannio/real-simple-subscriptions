import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import ListItem from './ListItem';
import fetchData from '../../helpers/fetchData';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      subscription: state.subscriptions[ownProps.id]
    })
  ),
  withState('feedItems', 'setFeedItems', []),
  withHandlers({
    fetchData: props => () => {
      console.log('fetching', props.subscription.url);
      fetchData(props.subscription.url).then(data => {
        console.log('XML response ----------\n', data);
        props.setFeedItems(data);
      });
    }
  })
);

export const SubscriptionPreview = ({ subscription, feedItems, fetchData }) => (
  <div className="subscription-preview">
    <h1>{subscription.title}</h1>
    <button onClick={fetchData}>Fetch data</button>
    <ul className="subscription-preview__list">
      {feedItems.map(item => (
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
  fetchData: PropTypes.func
};

export default enhance(SubscriptionPreview);
