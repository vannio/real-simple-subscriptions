import { INITIAL_STATE } from '../../config';
import { loadState } from './localStorage';

describe('localStorage', () => {
  it('loads an initial state', () => {
    expect(loadState('config')).toEqual(INITIAL_STATE.config);
    expect(loadState('data')).toEqual(INITIAL_STATE.data);
  });
});
