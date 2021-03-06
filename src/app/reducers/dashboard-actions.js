import * as Api from '../api'

export const CREATE_DASHBOARD = 'dashboard/CREATE_DASHBOARD'
export const DASHBOARD_CREATED = 'dashboard/DASHBOARD_CREATED'
export const UPDATE_DASHBOARD = 'dashboard/UPDATE_DASHBOARD'
export const DASHBOARD_UPDATED = 'dashboard/DASHBOARD_UPDATED'
export const DELETE_DASHBOARD = 'dashboard/DELETE_DASHBOARD'
export const DASHBOARD_DELETED = 'dashboard/DASHBOARD_DELETED'

export const createDashboard = (name, projectIds) => {

  return dispatch => {
    dispatch(createDashboardAction(name, projectIds))
    let items = projectIds.map(id => { return { projectId: id } })
    return Api.post('dashboard', { name, items })
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

export const deleteDashboard = dashboardId => {
  return dispatch => {
    dispatch(deleteDashboardAction(dashboardId))
    return Api.del('dashboard/' + dashboardId)
    .then(response => {
      dispatch(dashboardDeletedAction(dashboardId))
    })
  }
}

export const deleteDashboardAction = dashboardId => {
  return {
    type: DELETE_DASHBOARD,
    dashboardId
  }
}

export const dashboardDeletedAction = dashboardId => {
  return {
    type: DASHBOARD_DELETED,
    dashboardId
  }
}