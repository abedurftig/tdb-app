import { Segment, Label } from 'semantic-ui-react'

const spanStyle = {
  fontSize: 11,
  float: 'right'
}

export default (props) => {
  return (
    <div>
      <Segment color='yellow'>
        <p>{props.testCase.name}<span style={spanStyle}>Test Suite: {props.testCase.testSuiteName}</span></p>
      </Segment>
    </div>
  )
}