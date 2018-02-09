import React from 'react';
import PropTypes from 'prop-types';
import FeedGrid from '../../components/FeedGrid';

const Show = ({ feedItems, match }) => (
  <FeedGrid id={match.params.id} />
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
