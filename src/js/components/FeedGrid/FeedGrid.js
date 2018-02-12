import React from 'react';
import PropTypes from 'prop-types';
import FeedGridItem from '../FeedGridItem';
import SimpleIcon from '../SimpleIcon';
import Loading from '../Loading';

import './FeedGrid.css';

export const FeedGrid = props => (
  <div className="feed-grid">
    <h1>
      {props.title}
      <button
        className="unstyled-button check-button"
        onClick={props.onMarkAsReadClick}>
        <SimpleIcon name="check" title="Mark all as read" />
      </button>
    </h1>
    <div className="notifications">
      {props.isFetching && <Loading />}
      {props.fetchError && `An error occured. ${props.fetchError}`}
    </div>
    <ul className="list unstyled-list">
      {props.feedItems.map(item => (
        <FeedGridItem key={item.id} item={item} subscriptionId={props.id} />
      ))}
    </ul>
    <hr />
  </div>
);

FeedGrid.propTypes = {
  feedItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
  title: PropTypes.string,
  maxCount: PropTypes.number,
  isFetching: PropTypes.bool,
  fetchError: PropTypes.string,
  onMarkAsReadClick: PropTypes.func,
  id: PropTypes.string,
};

export default FeedGrid;
