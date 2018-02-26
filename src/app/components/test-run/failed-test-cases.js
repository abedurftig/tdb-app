import FailedTestCase from './failed-test-case'
import _ from 'lodash'

const getSortedByTestSuite = testCases => {
  return _.orderBy(testCases, 
    [
      function(tc) { return tc.name },
      function(tc) { return tc.testSuiteName }
    ],
    [
      'asc', 'asc'
    ])
}

export default (props) => {

  return (
    <div>
      <h4>Number of failed test cases: {props.testRun.failedTestCases.length}</h4>
      {getSortedByTestSuite(props.testRun.failedTestCases).map(testCase => <FailedTestCase key={testCase.id} testCase={testCase}/>)}
    </div>  
  )

}