import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';

const Show = ({ feedItems, match }) => (
  <SubscriptionPreview id={match.params.id} />
);

Show.propTypes = {
  feedItems: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default Show;
