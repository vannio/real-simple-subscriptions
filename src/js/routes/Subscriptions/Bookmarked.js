import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedGrid from '../../components/FeedGrid';
import {
  getBookmarkedItemObj,
  getSubscriptionKeys,
} from '../../store/selectors';

const enhance = connect(state => ({
  bookmarkedItems: getBookmarkedItemObj(state),
  subscriptionIds: getSubscriptionKeys(state),
}));

const Bookmarked = props => (
  <div className="subscriptions-bookmarked">
    {props.subscriptionIds.map(
      id =>
        props.bookmarkedItems[id].length > 0 && (
          <FeedGrid id={id} feedItems={props.bookmarkedItems[id]} key={id} />
        ),
    )}
  </div>
);

Bookmarked.propTypes = {
  subscriptionIds: PropTypes.array,
  bookmarkedItems: PropTypes.object,
};

export default enhance(Bookmarked);
