import {
  CREATE_DASHBOARD,
  DASHBOARD_CREATED,
  UPDATE_DASHBOARD,
  DASHBOARD_UPDATED,
  DELETE_DASHBOARD,
  DASHBOARD_DELETED
} from './dashboard-actions'

import {
  REQUEST_ACCOUNT,
  ACCOUNT_RECEIVED
} from './account-actions'

import dashboard from './dashboard'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_CREATED:
      return {
        ...state,
        dashboards: state.dashboards.concat([
          dashboard(undefined, action)
        ])
      }
    case DASHBOARD_UPDATED:
      return {
        ...state,
        dashboards: state.dashboards.map(d => dashboard(d, action))
      }
    case DASHBOARD_DELETED:
      return Object.assign({}, state, {
        dashboards: state.dashboards.filter(d => d.id !== action.dashboardId)
      })    
    case ACCOUNT_RECEIVED:
      return action.account 
    default:
      return state  
  }
}