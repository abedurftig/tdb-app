import SkippedTestCase from './skipped-test-case'
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
      <h4>Number of skipped test cases: {props.testRun.skippedTestCases.length}</h4>
      {getSortedByTestSuite(props.testRun.skippedTestCases).map(testCase => <SkippedTestCase key={testCase.id} testCase={testCase}/>)}
    </div>  
  )

}