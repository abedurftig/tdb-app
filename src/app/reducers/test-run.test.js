import reducer from './test-run';
import * as Actions from './test-run-actions';

describe('test run reducer', () => {
    
  it('should return the initial state', () => {
     
    expect(
      reducer(undefined, {}))
    .toEqual(null)

  })

}) 
