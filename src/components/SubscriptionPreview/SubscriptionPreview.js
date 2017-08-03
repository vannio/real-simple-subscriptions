import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import ListItem from './ListItem';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import Icon, { LoadingIcon } from '../Icon/Icon';
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
    }),
    { fetchFeedItems: actions.fetchFeedItems }
  ),
  withHandlers({
    fetchData: props => () => props.fetchFeedItems(props.id, props.subscription.url)
  })
);

export const SubscriptionPreview = props => (
  <div className="subscription-preview">
    <h1>
      {props.subscription.title}
      <button
        onClick={props.fetchData}
        disabled={props.isFetching}
        className="fetch-button">
        <Icon name="reload" />
      </button>
    </h1>
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
  fetchData: PropTypes.func,
  maxCount: PropTypes.number,
  isFetching: PropTypes.bool,
  fetchError: PropTypes.string
};

export default withRouter(enhance(SubscriptionPreview));