import React from 'react';
import PropTypes from 'prop-types';
import FeedGrid from '../../components/FeedGrid';

export const Home = ({
  subscriptions,
  subscriptionIds,
  config: { maxCount },
}) => (
  <div className="subscriptions-home">
    {subscriptionIds.length > 0 ? (
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

Home.propTypes = {
  subscriptions: PropTypes.object,
  subscriptionIds: PropTypes.array,
  config: PropTypes.shape({
    maxCount: PropTypes.number,
  }),
};

export default Home;
