import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getById
} from '../../reducers/projects'
import ProjectOverviewTable from './project-overview-table'

class Project extends React.Component {

  constructor() {
    super()
    this.state = { selectedTestRun: undefined }
  }

  componentDidMount() {
    this.props.getById(this.props.match.params.id)
  }

  render() {  
    let p = this.props.project
    let tr = this.state.selectedTestRun
    return (
      <div>
        {p &&
          <div>
            <h2>{p.name}</h2>
            <h4>Test Runs</h4>
            <p>{p.name} has {p.testRuns.length} test runs.</p>
            {
              this.getTestRunsEl(p)
            }
            {tr && 
              <div>
                <h4>Selected Test Run</h4>
                <p>{tr.name}</p>
                <p>This test run had {tr.testSuites.length} Test Suites</p>
              </div>
            }
          </div>
        }
      </div>
    )
  }

  handleSelect(tr) {
    this.setState({ selectedTestRun: tr })
  }

  getTestRunsEl(project) {
    return (
      <ProjectOverviewTable project={project} />
    )
  }

}

const mapStateToProps = state => ({
  project: state.projects.project,
  loadingProject: state.projects.loadingProject,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getById
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)