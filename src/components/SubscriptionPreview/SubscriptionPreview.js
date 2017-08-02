import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import ListItem from './ListItem';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      subscription: state.subscriptions[ownProps.id]
    })
  ),
  withProps({
    feedItems: [
      {
        title: 'Breaking news',
        description: 'News just in - water is wet',
        timeStamp: Date.now()
      },
      {
        title: 'Regular news',
        description: 'The sky is blue',
        timeStamp: 1501669041425
      }
    ]
  })
);

export const SubscriptionPreview = ({ subscription, feedItems }) => (
  <div className="subscription-preview">
    <h1>{subscription.title}</h1>
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
      description: PropTypes.string,
      timeStamp: PropTypes.number
    })
  )
};

export default enhance(SubscriptionPreview);
