import React from 'react';
import PropTypes from 'prop-types';
import FeedGrid from '../FeedGrid';

export const FeedGridList = ({
  hasSubscriptions,
  subscriptionIds,
  maxCount,
}) => (
  <div className="feed-grid-list">
    {hasSubscriptions ? (
      subscriptionIds.map(id => (
        <FeedGrid key={id} id={id} maxCount={maxCount} />
      ))
    ) : (
      <div>
        <h1>Nothing to see here...</h1>
        <p>Add some feeds to get started!</p>
      </div>
    )}
  </div>
);

FeedGridList.propTypes = {
  hasSubscriptions: PropTypes.bool.isRequired,
  subscriptionIds: PropTypes.array,
  maxCount: PropTypes.number,
};

export default FeedGridList;
