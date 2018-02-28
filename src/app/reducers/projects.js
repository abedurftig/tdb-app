import * as Api from '../api'
import { LOGOUT_RECEIVED } from './session'

export const ALL_REQUESTED = 'projects/ALL_REQUESTED'
export const ALL_RECEIVED = 'projects/ALL_RECEIVED'
export const PROJECT_REQUESTED = 'projects/PROJECT_REQUESTED'
export const PROJECT_RECEIVED = 'projects/PROJECT_RECEIVED'
export const SUMMARY_REQUESTED = 'projects/SUMMARY_REQUESTED'
export const SUMMARY_RECEIVED = 'projects/SUMMART_RECEIVED'

export const DELETE_PROJECT = 'projects/DELETE_PROJECT'
export const PROJECT_DELETED = 'projects/PROJECT_DELETED'

export const PROJECT_NEW = 'projects/PROJECT_NEW'
export const PROJECT_CREATED = 'projects/PROJECT_CREATED'

const initialState = {
  all: [],
  project: undefined,
  loadingProject: false,
  loading: false,
  loadingSummary: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_REQUESTED:
      return {
        ...state,
        all:[],
        project: undefined,
        loading: true
      }
    case ALL_RECEIVED:
      return {
        ...state,
        all: action.projects,
        loading: false
      }
    case PROJECT_REQUESTED:
      return {
        ...state,
        project: undefined,
        loadingProject: true
      }
    case PROJECT_RECEIVED:
      return {
        ...state,
        loadingProject: false,
        project: action.project
      }  
    case SUMMARY_REQUESTED:
      return {
        ...state,
        testRunsSummary: undefined,
        loadingSummary: true
      }  
    case SUMMARY_RECEIVED:
      return {
        ...state,
        loadingSummary: false,
        testRunsSummary: action.testRunsSummary
      }
    case PROJECT_CREATED:
      return Object.assign({}, state, {
        all: state.all.concat([action.project])
      })
    case PROJECT_DELETED:
      return Object.assign({}, state, {
        all: state.all.filter(p => p.id !== action.projectId)
      })
    case LOGOUT_RECEIVED:
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export const createProject = (accountId, name) => {
  
  return dispatch => {
    dispatch({
      type: PROJECT_NEW
    })
    return Api.post('project', { accountId, name })
    .then(project => {
      dispatch({
        type: PROJECT_CREATED,
        project
      })
    })
  }

}

export const allProjects = (accountId) => {
  return dispatch => {
    dispatch({
      type: ALL_REQUESTED
    })
    return Api.request('account/' + accountId + '/projects-summary')
    .then(projects => {
      dispatch({
        type: ALL_RECEIVED,
        projects
      })
    })
  }
}

export const getById = id => {
  return dispatch => {
    dispatch({
      type: PROJECT_REQUESTED
    })
    return Api.request('project/' + id + '/summary')
    .then(project => {
      dispatch({
        type: PROJECT_RECEIVED,
        project
      })
    })
  }
}

export const deleteProject = projectId => {
  return dispatch => {
    dispatch({
      type: DELETE_PROJECT
    })
    return Api.del('project/' + projectId)
    .then(response => {
      dispatch({
        type: PROJECT_DELETED,
        projectId
      })
    })
  }
}

export const getTestRunsSummary = projectId => {
  return dispatch => {
    dispatch({
      type: SUMMARY_REQUESTED
    })
    return Api.request('project/' + projectId + '/testruns-summary')
    .then(testRunsSummary => {
      dispatch({
        type: SUMMARY_RECEIVED,
        testRunsSummary
      })
    })
  }
}