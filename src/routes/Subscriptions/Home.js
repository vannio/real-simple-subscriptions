import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedGrid from '../../components/FeedGrid';
import { getSubscriptionKeys } from '../../ducks';

const enhance = connect(
  state => ({
    subscriptions: state.subscriptions,
    subscriptionIds: getSubscriptionKeys(state),
    maxCount: state.settings.maxCount,
    hideRead: state.settings.hideRead
  })
);

export const Home = ({ subscriptions, subscriptionIds, maxCount }) => (
  <div className="subscription-list">
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
  maxCount: PropTypes.number
};

export default enhance(Home);
