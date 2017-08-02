export const FETCH_FEEDITEMS_REQUEST = 'FETCH_FEEDITEMS_REQUEST';
export const FETCH_FEEDITEMS_SUCCESS = 'FETCH_FEEDITEMS_SUCCESS';
export const FETCH_FEEDITEMS_FAILURE = 'FETCH_FEEDITEMS_FAILURE';

const feedItems = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEEDITEMS_REQUEST:
      return state;
    case FETCH_FEEDITEMS_SUCCESS:
      return {
        ...state,
        [action.subscriptionId]: action.items
      };
    case FETCH_FEEDITEMS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default feedItems;
