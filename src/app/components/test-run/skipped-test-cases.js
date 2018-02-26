import SkippedTestCase from './skipped-test-case'

export default (props) => {

  return (
    <div>
      <h4>Number of skipped test cases: {props.testRun.skippedTestCases.length}</h4>
      {props.testRun.skippedTestCases.map(testCase => <SkippedTestCase testCase={testCase}/>)}
    </div>  
  )

}