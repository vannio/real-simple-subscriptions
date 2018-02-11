import { connect } from 'react-redux';
import {
  getAllBookmarkedItems,
  getSubscriptionKeys,
} from '../../store/selectors/subscriptions';

import Bookmarked from './Bookmarked';

const enhance = connect(state => ({
  bookmarkedItems: getAllBookmarkedItems(state),
  subscriptionIds: getSubscriptionKeys(state),
}));

export default enhance(Bookmarked);
