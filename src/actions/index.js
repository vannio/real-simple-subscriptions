import fetchData from '../helpers/fetchData';

// SETTINGS
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  settings
});

export const saveSettings = settings =>
  dispatch => {
    dispatch(updateSettings(settings));
    window.document.documentElement.dataset.colour = settings.accentColour.toLowerCase();
  };

// SUBSCRIPTIONS
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

// FEED ITEMS
export const MARK_FEEDITEM_READ = 'MARK_FEEDITEM_READ';
export const markAsRead = ids => ({
  type: MARK_FEEDITEM_READ,
  ids
});

export const UPDATE_UNREAD_COUNT = 'UPDATE_UNREAD_COUNT';
export const updatedUnreadCount = readItems => ({
  type: UPDATE_UNREAD_COUNT,
  readItems
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

export const fetchFeedItems = (subscriptionId, url) =>
  dispatch => {
    dispatch(fetchFeedItemsRequest(url));
    return fetchData(url)
      .then(items =>
        dispatch(fetchFeedItemsSuccess(subscriptionId, items))
      )
      .catch(error => {
        var err = error.toString();
        dispatch(fetchFeedItemsFailure(subscriptionId, err));
      });
  };
