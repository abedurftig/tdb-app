import * as Api from '../api'

export const CREATE_DASHBOARD = 'dashboard/CREATE_DASHBOARD'
export const DASHBOARD_CREATED = 'dashboard/DASHBOARD_CREATED'
export const UPDATE_DASHBOARD = 'dashboard/UPDATE_DASHBOARD'
export const DASHBOARD_UPDATED = 'dashboard/DASHBOARD_UPDATED'

export const createDashboard = (name, projectIds) => {

  return dispatch => {
    dispatch(createDashboardAction(name, projectIds))
    return Api.post('dashboard', { name, projectIds })
    .then(dashboard => {
      dispatch(dashboardCreatedAction(dashboard))
    })
  }
}

export const createDashboardAction = (name, projectIds) => {
  return {
    type: CREATE_DASHBOARD,
    name,
    projectIds
  }
}

export const dashboardCreatedAction = dashboard => {
  return {
    type: DASHBOARD_CREATED,
    dashboard
  }
}

export const updateDashboard = dashboard => {

  return dispatch => {
    dispatch(updateDashboardAction(dashboard))
    return Api.update('dashboard', dashboard)
    .then(dashboard => {
      dispatch(dashboardUpdatedAction(dashboard))
    })
  }
}

export const updateDashboardAction = dashboard => {
  return {
    type: UPDATE_DASHBOARD,
    dashboard
  }
}

export const dashboardUpdatedAction = dashboard => {
  return {
    type: DASHBOARD_UPDATED,
    dashboard
  }
}