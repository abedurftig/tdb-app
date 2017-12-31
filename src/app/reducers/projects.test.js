import reducer from './projects';

describe('projects reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          projects: []
        }
      )
    })
})