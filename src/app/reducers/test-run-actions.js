import * as Api from '../api'

export const REQUEST_TEST_RUN = 'test-run/REQUEST_TEST_RUN'
export const TEST_RUN_RECEIVED = 'test-run/TEST_RUN_RECEIVED'

export const loadTestRun = id => {
  return dispatch => {
    dispatch(requestTestRunAction(id))
    return Api.request('test-run/' + id)
    .then(testRun => {
      dispatch(testRunReveivedAction(testRun))
    })
  }
}

export const requestTestRunAction = id => {
  return {
    type: REQUEST_TEST_RUN,
    id
  }
}

export const testRunReveivedAction = testRun => {
  return {
    type: TEST_RUN_RECEIVED,
    testRun
  }
}