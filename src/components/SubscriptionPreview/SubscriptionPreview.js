import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ListItem from './ListItem';
import { withRouter } from 'react-router-dom';
import { LoadingIcon } from '../Icon/Icon';
import {
  getSubscription,
  getFeedItems,
  isFeedItemsFetching,
  getFeedItemsFetchError
} from '../../ducks';
import './styles.css';

const enhance = compose(
  connect(
    (state, ownProps) => ({
      subscription: getSubscription(state, ownProps.id),
      feedItems: getFeedItems(state, ownProps.id),
      isFetching: isFeedItemsFetching(state, ownProps.id),
      fetchError: getFeedItemsFetchError(state, ownProps.id)
    })
  )
);

export const SubscriptionPreview = props => (
  <div className="subscription-preview">
    <h1>{props.subscription.title}</h1>
    <div className="notifications">
      {props.isFetching && <LoadingIcon />}
      {props.fetchError && props.fetchError}
    </div>
    <ul className="list unstyled-list">
      {props.feedItems.slice(0, props.maxCount).map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
    <hr />
  </div>
);

SubscriptionPreview.propTypes = {
  subscription: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }),
  feedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
      url: PropTypes.string
    })
  ),
  maxCount: PropTypes.number,
  isFetching: PropTypes.bool,
  fetchError: PropTypes.string
};

export default withRouter(enhance(SubscriptionPreview));
