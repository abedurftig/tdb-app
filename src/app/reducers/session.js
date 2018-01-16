export const TOKEN_REFRESH_REQUESTED = 'session/TOKEN_REFRESH_REQUESTED'
export const TOKEN_REFRESH_RECEIVED = 'session/TOKEN_REFRESH_RECEIVED'
export const AUTH_USER_CHANGED = 'session/AUTH_USER_CHANGED'
export const LOGIN_REQUESTED = 'session/LOGIN_REQUESTED'
export const LOGIN_RECEIVED = 'session/LOGIN_RECEIVED'
export const LOGOUT_REQUESTED = 'session/LOGOUT_REQUESTED'
export const LOGOUT_RECEIVED = 'session/LOGOUT_RECEIVED'

const initialState = {
  user: undefined,
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case AUTH_USER_CHANGED:
      console.log(action.user)
      return {
        ...state,
        user: action.user
      }
    default:
      return state  
  }
}

export const refreshToken = () => {}

export const setAuthUser = user => {

  return dispatch => {
    dispatch({
      type: AUTH_USER_CHANGED,
      user
    })
    // return fetch(process.env.API_URL + '/account/1/projects-summary')
    // .then(result => {
    //   return result.json()
    // }).then(projects => {
    //   dispatch({
    //     type: ALL_RECEIVED,
    //     projects
    //   })
    // })
  }

}

export const logout = () => {}