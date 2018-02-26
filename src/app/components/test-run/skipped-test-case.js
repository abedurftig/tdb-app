import { Segment } from 'semantic-ui-react'

export default (props) => {
  return (
    <div>
      <Segment color='yellow'>
        <p>Name: {props.testCase.name}, Test-Suite: {props.testCase.testSuiteId}</p>
      </Segment>
    </div>
  )
}