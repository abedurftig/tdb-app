import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projects from './reducers/projects'
import session from './reducers/session'
import account from './reducers/account'

export default combineReducers({
  routing: routerReducer,
  projects,
  session,
  account
})