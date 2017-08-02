import transformXML from '../helpers/transformXML';

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

export function fetchFeedItems(id, url) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(fetchFeedItemsRequest(url));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(url)
      .then(response => response.text())
      .then(xml => transformXML(xml))
      .then(data =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(fetchFeedItemsSuccess(id, data))
      )
      .catch(error => {
        var err = error.toString();
        console.log('An error occured.', err);
        dispatch(fetchFeedItemsFailure(id, err));
      });
  };
}
