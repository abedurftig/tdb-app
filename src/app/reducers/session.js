import * as Api from '../api'
import { push } from 'react-router-redux'

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
      return {
        ...state,
        user: action.user
      }
    case LOGOUT_RECEIVED:
      return {
        ...state,
        user: undefined
      }  
    default:
      return state  
  }
}

export const loginSuccess = (user, redirect) => {

  let route = redirect || '/projects'
  console.log(route)
  return dispatch => {
    dispatch({
      type: AUTH_USER_CHANGED,
      user
    })
    dispatch(push(route))
  }
}

export const setAuthUser = user => {
  return dispatch => {
    dispatch({
      type: AUTH_USER_CHANGED,
      user
    })
  }
}

export const logout = () => {
  sessionStorage.clear()
  return dispatch => {
    dispatch({
      type: LOGOUT_RECEIVED
    })
    dispatch(push('/landingpage'))
  }
}