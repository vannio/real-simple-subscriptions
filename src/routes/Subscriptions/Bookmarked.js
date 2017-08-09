import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubscriptionPreview from '../../components/SubscriptionPreview/SubscriptionPreview';
import { getBookmarkedItemObj, getSubscriptionKeys } from '../../ducks';

const enhance = connect(
  state => ({
    bookmarkedItems: getBookmarkedItemObj(state),
    subscriptionIds: getSubscriptionKeys(state)
  })
);

const Bookmarked = props => (
  <div>
    {props.subscriptionIds.map(id => props.bookmarkedItems[id].length > 0 ? (
      <SubscriptionPreview id={id} feedItems={props.bookmarkedItems[id]} key={id} />
    ) : (
      null
    ))}
  </div>
);

Bookmarked.propTypes = {
  subscriptionIds: PropTypes.array,
  bookmarkedItems: PropTypes.object
};

export default enhance(Bookmarked);
