import React from 'react';
import PropTypes from 'prop-types';
import FeedGrid from '../../components/FeedGrid';

const Subscription = ({ match }) => (
  <FeedGrid id={match.params.id} />
);

Subscription.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default Subscription;
