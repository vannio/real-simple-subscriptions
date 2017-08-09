import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';
import { getBookmarkedItems } from '../../ducks';

const enhance = connect(
  state => ({ feedItems: getBookmarkedItems(state) })
);

const Bookmarked = ({ feedItems, match }) => (
  <SubscriptionPreview id={match.params.id} feedItems={feedItems} title="Bookmarked" />
);

Bookmarked.propTypes = {
  feedItems: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default enhance(Bookmarked);
