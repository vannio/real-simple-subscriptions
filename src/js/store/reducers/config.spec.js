import { UPDATE_CONFIG } from '../actions/config';
import { FETCH_FEEDITEMS_SUCCESS } from '../actions/subscriptions';
import reducer from './config';

describe('Reducers: config', function() {
  test('merges config state on UPDATE_CONFIG', function() {
    const state = {
      fetchInterval: 30,
      accentColour: 'blue',
    };
    const action = {
      type: UPDATE_CONFIG,
      config: {
        accentColour: 'green',
      },
    };

    expect(reducer(state, action)).toEqual({
      fetchInterval: 30,
      accentColour: 'green',
    });
  });

  test('adds a timestamp on FETCH_FEEDITEMS_SUCCESS', function() {
    const state = {
      fetchInterval: 30,
      accentColour: 'blue',
    };
    const timestamp = Date.now();
    const action = {
      type: FETCH_FEEDITEMS_SUCCESS,
      timestamp: timestamp,
    };

    expect(reducer(state, action)).toEqual({
      fetchInterval: 30,
      accentColour: 'blue',
      latestFetch: timestamp,
    });
  });
});
