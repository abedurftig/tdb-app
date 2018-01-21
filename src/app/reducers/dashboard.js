import {
  CREATE_DASHBOARD,
  DASHBOARD_CREATED,
  UPDATE_DASHBOARD,
  DASHBOARD_UPDATED
} from './dashboard-actions'

const initialState = {
  id: undefined,
  name: undefined,
  projectIds: []
}

export default (state = initialState, action) => {
  
  const { type, dashboard } = action

  switch (type) {
    case DASHBOARD_CREATED:
      return Object.assign({}, action.dashboard)
    case DASHBOARD_UPDATED:
      return state.id == action.dashboard.id ?
        Object.assign({}, action.dashboard) :
        state
    default:
      return state  
  }
}

