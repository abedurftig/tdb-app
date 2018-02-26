import { Segment } from 'semantic-ui-react'

const actionStyle = {
  color: '#000000',
  textDecoration: 'underline',
  cursor: 'pointer',
  userSelect: 'none',
  fontSize: 12,
}

const spanStyle = {
  fontSize: 11,
  float: 'right'
}

const preStyle = {
  overflow: 'auto',
  tabSize: 2
}

class FailedTestCase extends React.Component {

  constructor(props) {
    super(props)
    this.state = { detailsVisible: false }
  }

  getLabel() {
    return this.state.detailsVisible ?
      "(less)" :
      "(more)"
  }

  handleToggle = () => {
    this.setState({ detailsVisible: !this.state.detailsVisible })
  }

  render() {
    return (
      <div>
        <Segment color='red'>
          <p>{this.props.testCase.name} <span style={actionStyle} onClick={this.handleToggle}>{this.getLabel()}</span>
            <span style={spanStyle}>Test Suite: {this.props.testCase.testSuiteName}</span>
          </p>
          {this.state.detailsVisible && 
          <pre style={preStyle}>
            {this.props.testCase.value}
          </pre>}
        </Segment>
      </div>
    )
  } 

}

export default FailedTestCase