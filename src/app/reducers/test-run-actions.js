import * as Api from '../api'

export const REQUEST_TEST_RUN = 'test-run/REQUEST_TEST_RUN'
export const TEST_RUN_RECEIVED = 'test-run/TEST_RUN_RECEIVED'

export const loadTestRun = externalId => {
  return dispatch => {
    dispatch(requestTestRunAction(externalId))
    return Api.request('test-run/' + externalId)
    .then(testRun => {
      dispatch(testRunReveivedAction(testRun))
    })
  }
}

export const requestTestRunAction = externalId => {
  return {
    type: REQUEST_TEST_RUN,
    externalId
  }
}

export const testRunReveivedAction = testRun => {
  return {
    type: TEST_RUN_RECEIVED,
    testRun
  }
}