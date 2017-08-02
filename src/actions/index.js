import fetchData from '../helpers/fetchData';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  settings
});

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const addSubscription = subscription => ({
  type: ADD_SUBSCRIPTION,
  subscription
});

export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION';
export const updateSubscription = subscription => ({
  type: UPDATE_SUBSCRIPTION,
  subscription
});

export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';
export const deleteSubscription = subscriptionId => ({
  type: DELETE_SUBSCRIPTION,
  subscriptionId
});

export const FETCH_FEEDITEMS_REQUEST = 'FETCH_FEEDITEMS_REQUEST';
export const fetchFeedItemsRequest = (subscriptionId, url) => ({
  type: FETCH_FEEDITEMS_REQUEST,
  subscriptionId,
  url
});

export const FETCH_FEEDITEMS_SUCCESS = 'FETCH_FEEDITEMS_SUCCESS';
export const fetchFeedItemsSuccess = (subscriptionId, items) => ({
  type: FETCH_FEEDITEMS_SUCCESS,
  subscriptionId,
  items
});

export const FETCH_FEEDITEMS_FAILURE = 'FETCH_FEEDITEMS_FAILURE';
export const fetchFeedItemsFailure = (subscriptionId, error) => ({
  type: FETCH_FEEDITEMS_FAILURE,
  subscriptionId,
  error
});

export const fetchFeedItems = (id, url) =>
  dispatch => {
    dispatch(fetchFeedItemsRequest(url));
    return fetchData(url).then(data =>
        dispatch(fetchFeedItemsSuccess(id, data))
      )
      .catch(error => {
        var err = error.toString();
        console.log('An error occured.', err);
        dispatch(fetchFeedItemsFailure(id, err));
      });
  };
