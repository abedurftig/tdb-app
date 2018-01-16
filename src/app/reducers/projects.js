import { request } from '../util'

export const ALL_REQUESTED = 'projects/ALL_REQUESTED'
export const ALL_RECEIVED = 'projects/ALL_RECEIVED'
export const PROJECT_REQUESTED = 'projects/PROJECT_REQUESTED'
export const PROJECT_RECEIVED = 'projects/PROJECT_RECEIVED'
export const SUMMARY_REQUESTED = 'projects/SUMMARY_REQUESTED'
export const SUMAMRT_RECEIVED = 'projects/SUMMART_RECEIVED'

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
    case SUMAMRT_RECEIVED:
      return {
        ...state,
        loadingSummary: false,
        testRunsSummary: action.testRunsSummary
      }              
    default:
      return state
  }
}

export const allProjects = (accountId) => {
  return dispatch => {
    dispatch({
      type: ALL_REQUESTED
    })
    // fetch(process.env.API_URL + '/account/' + accountId + '/projects-summary')
    // .then(result => {
    //   return result.json()
    // })
    return request('account/' + accountId + '/projects-summary')
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
    return fetch(process.env.API_URL + '/project/' + id)
    .then(result => {
      return result.json()
    }).then(project => {
      dispatch({
        type: PROJECT_RECEIVED,
        project
      })
    })
  }
}

export const getTestRunsSummary = projectId => {
  return dispatch => {
    dispatch({
      type: SUMMARY_REQUESTED
    })
    return fetch(process.env.API_URL + '/project/' + projectId + '/testruns-summary')
    .then(result => {
      return result.json()
    }).then(testRunsSummary => {
      dispatch({
        type: SUMAMRT_RECEIVED,
        testRunsSummary
      })
    })
  }
}