import {
  CREATE_DASHBOARD,
  DASHBOARD_CREATED,
  UPDATE_DASHBOARD,
  DASHBOARD_UPDATED
} from './dashboard-actions'

import _ from 'lodash'
import dashboard from './dashboard'

const initialState = {
  id: undefined,
  name: undefined,
  dashboards: []
}

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
    default:
      return state  
  }
}

