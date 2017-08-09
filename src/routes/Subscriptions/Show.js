import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';
import { getFeedItems } from '../../ducks';

const enhance = connect(
  (state, ownProps) => ({
    feedItems: getFeedItems(state, ownProps.id)
  })
);

const Show = ({ feedItems, match }) => (
  <SubscriptionPreview id={match.params.id} feedItems={feedItems} />
);

Show.propTypes = {
  feedItems: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(Show);
