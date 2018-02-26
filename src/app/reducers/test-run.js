import {
  REQUEST_TEST_RUN,
  TEST_RUN_RECEIVED
} from './test-run-actions'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_RUN_RECEIVED:
      return action.testRun 
    default:
      return state  
  }
}