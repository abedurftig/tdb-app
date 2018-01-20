import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createProject } from '../../reducers/projects'
import { Input, Button } from 'semantic-ui-react'

class CreateProject extends React.Component {

  constructor(props) {

    super(props)
    this.state = { projectName: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      projectName: value
    })
  }

  handleSubmit(event) {
    
    event.preventDefault();
    this.props.createProject(
      this.props.user.accountId, 
      this.state.projectName)
    
    this.inputRef.value = '' 

  }

  handleRef = (c) => {
    if (c) {
      this.inputRef = c.inputRef
    }
  }

  render() {
    return (
      <Input fluid ref={this.handleRef} iconPosition='left' placeholder='Create project...'
        action={<Button primary onClick={this.handleSubmit}>Add</Button>}
        icon='add' onChange={this.handleChange}/>
    )
  }

}

const mapStateToProps = state => ({
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createProject
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject)