import uniq from 'lodash/fp/uniq';
import { MARK_FEEDITEM_READ } from '../actions';

const feedItems = (state = [], action) => {
  switch (action.type) {
    case MARK_FEEDITEM_READ:
      return uniq(
        state.concat(action.ids)
      );
    default:
      return state;
  }
};

export default feedItems;
