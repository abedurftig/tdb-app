import { Segment } from 'semantic-ui-react'
import Collabsible from '../common/collapsible'

const style = {
  backgroundColor: '#FF0000',
  marginBottom: '5px',
  padding: '5px'
}

const spanStyle = {
  color: '#000000',
  textDecoration: 'underline',
  cursor: 'pointer',
  userSelect: 'none'
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
      <div style={style}>
        <p>Name: {this.props.testCase.name} <span style={spanStyle} onClick={this.handleToggle}>{this.getLabel()}</span></p>
        {this.state.detailsVisible && 
        <Segment secondary clearing size='tiny'>
          <pre>
            {this.props.testCase.value}
          </pre>
        </Segment>
        }
      </div>
    )
  } 

}

export default FailedTestCase