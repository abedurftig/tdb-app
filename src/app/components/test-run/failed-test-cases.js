import FailedTestCase from './failed-test-case'

export default (props) => {

  return (
    <div>
      <h4>Number of failed test cases: {props.testRun.failedTestCases.length}</h4>
      {props.testRun.failedTestCases.map(testCase => <FailedTestCase key={testCase.id} testCase={testCase}/>)}
    </div>  
  )

}