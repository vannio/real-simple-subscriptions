import { INITIAL_STATE } from '../data';
import { loadState } from './localStorage';

describe('localStorage helper', () => {
  it('loads an initial state', () => {
    expect(loadState('config')).toEqual(INITIAL_STATE.config);
    expect(loadState('data')).toEqual(INITIAL_STATE.data);
  });
});
