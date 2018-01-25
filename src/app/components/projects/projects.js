import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { allProjects, deleteProject } from '../../reducers/projects'
import { Icon, Input, Button, Item, Divider } from 'semantic-ui-react'
import CreateProject from './create-project'
import ProjectItem from './project-item'
import * as Api from '../../api'


class Projects extends React.Component {
  
  componentDidMount() {
    if (this.props.user) {
      this.props.allProjects(this.props.user.accountId)
    }
  }

  render() {  
    return this.props.projects ?
      buildElement(this.props.projects, this.props.deleteProject) :
      <div>loading...</div>
  }

}

const buildElement = (projects, deleteProject) => {

  let projectsEl = projects.map(pr => {
    return <ProjectItem key={pr.id} project={pr} deleteFunction={deleteProject}/>
  })
  
  return (
    <div>
      <CreateProject />
      <Divider clearing />
      <p>You currently have {projects.length} projects.</p>
      <div>
          {projectsEl}
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    user: state.session.user,
    projects: state.projects.all,
    loading: state.projects.loading,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  allProjects,
  deleteProject
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)