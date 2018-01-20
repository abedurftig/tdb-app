import reducer, { LOGOUT_RECEIVED, AUTH_USER_CHANGED } from './session';

describe('session reducer', () => {
    
  it('should return the initial state', () => {
     
    expect(
      reducer(undefined, {}))
    .toEqual({ user: undefined })

  })

  it('should return the initial state after logout', () => {

    const stateBefore = { user: { email: "email@email.com" } }
    const action = { type: LOGOUT_RECEIVED }
    const stateAfter = { user: undefined }
  
    expect(
      reducer(stateBefore, action)
    ).toEqual(stateAfter)

  })

  it('should set the authenticated user', () => {

    const stateBefore = {}
    const action = { type: AUTH_USER_CHANGED, user: { email: "email@email.com" } }
    const stateAfter = { user: { email: "email@email.com" } }
  
    expect(
      reducer(stateBefore, action)
    ).toEqual(stateAfter)

  })

})