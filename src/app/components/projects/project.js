import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectOverviewTable from './project-overview-table'
import ProjectTestRunGraph from './auto-load-testrun-graph'
import { getById } from '../../reducers/projects'

class Project extends React.Component {

  componentDidMount() {
    this.props.getById(this.props.match.params.id)
  }

  render() {  
    return !this.props.loadingProject && this.props.project?
      buildElement(this.props.project) :
      <div>loading...</div>
  }

}

const buildElement = project => {
  return (
    <div>
      <h2>{project.name}</h2>
      <h4>Test Runs</h4>
      <p>{project.name} has {project.testRuns.length} test runs.</p>
      <div>
        {/* <ProjectOverviewTable project={project} /> */}
        <ProjectTestRunGraph projectId={project.id}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  project: state.projects.project,
  loadingProject: state.projects.loadingProject
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getById
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)