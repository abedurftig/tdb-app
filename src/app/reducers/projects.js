export const ALL_REQUESTED = 'projects/ALL_REQUESTED'
export const ALL_RECEIVED = 'projects/ALL_RECEIVED'
export const PROJECT_REQUESTED = 'projects/PROJECT_REQUESTED'
export const PROJECT_RECEIVED = 'projects/PROJECT_RECEIVED'

const initialState = {
  projects: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_REQUESTED:
      return {
        ...state,
        projects:[],
        loading: true
      }
    case ALL_RECEIVED:
      return {
        ...state,
        projects: action.projects,
        loading: false
      }
    case PROJECT_REQUESTED:
      return {
        ...state,
        loadingProject: true
      }
      case PROJECT_RECEIVED:
      return {
        ...state,
        loadingProject: false,
        project: action.project
      }  
    default:
      return state
  }
}

export const allProjects = () => {
  return dispatch => {
    dispatch({
      type: ALL_REQUESTED
    })
    return fetch(process.env.API_URL + '/account/1/projects-summary')
    .then(result => {
      return result.json()
    }).then(projects => {
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