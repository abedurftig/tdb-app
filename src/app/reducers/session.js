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

// export const login = (username, password) => {
// 
  // let data = { username, password }

  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');

  // let options = {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers
  // } 

  // let handleResponse = (rawReponse) => {
  //   console.log("rawResponse:" + rawReponse)
  //   let token = response.headers.get('Authorization')
  //   sessionStorage.setItem("jwtToken", token)
  // }

  
  //   this.props.setAuthUser(user)
  //   // this.props.goTo("projects")
  // })
  // .catch(error => {
  //   console.log(error)
  // })

  // return dispatch => {
  //   dispatch({
  //     type: PROJECT_NEW
  //   })
  //   return Api.post('project', { accountId, name })
  //   .then(project => {
  //     dispatch({
  //       type: PROJECT_CREATED,
  //       project
  //     })
  //   })
  // }
    
// }

export const loginSuccess = user => {

  return dispatch => {
    dispatch({
      type: AUTH_USER_CHANGED,
      user
    })
    dispatch(push('/projects'))
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

export const logout = () => {}