import { Segment } from 'semantic-ui-react'

const spanStyle = {
  color: '#000000',
  textDecoration: 'underline',
  cursor: 'pointer',
  userSelect: 'none'
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
      "Hide details" :
      "Show details"
  }

  handleToggle = () => {
    this.setState({ detailsVisible: !this.state.detailsVisible })
  }

  render() {
    return (
      <div>
        <Segment color='red'>
          <p>Name: {this.props.testCase.name} <span style={spanStyle} onClick={this.handleToggle}>{this.getLabel()}</span></p>
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