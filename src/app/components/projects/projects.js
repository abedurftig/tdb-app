import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { allProjects } from '../../reducers/projects'
import { Icon, Input, Button, Item } from 'semantic-ui-react'

class Projects extends React.Component {
  
  componentDidMount() {
    console.log("mount")
    if (this.props.user) {
      console.log("user" + this.props.user.accountId)
      this.props.allProjects(this.props.user.accountId)
    }
  }

  render() {  
    return this.props.projects ?
      buildElement(this.props.projects) :
      <div>loading...</div>
  }

}

const buildElement = projects => {

  let projectsEl = projects.map(pr => {
    return <li key={pr.id}><Link to={"/projects/" + pr.id}>{pr.name}</Link></li>
  })
  
  return (
    <div>
      <Input size="tiny"iconPosition='left' placeholder='Create project...'
        action={<Button primary>Save</Button>}
        actionPosition='right'
        icon='add' floated='right'/>
      <div>
        <p>Count: {projects.length}</p>
        <ul>
          {projectsEl}
        </ul>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.session.user,
    projects: state.projects.all,
    loading: state.projects.loading,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  allProjects
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)