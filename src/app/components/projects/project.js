import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getById
} from '../../reducers/projects'
import ProjectOverviewTable from './project-overview-table'
import TestRunGraph from './project-testrun-graph'

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
          </div>
        }
      </div>
    )
  }

  handleSelect(tr) {
    this.setState({ selectedTestRun: tr })
  }

  getTestRunsEl(project) {

    var data = {
      labels: ["TR1", "TR2"],
      datasets: [{
          label: 'Passed',
          backgroundColor: '#039E1F',
          data: [
            5, 6
          ]
      }, {
          label: 'Skipped',
          backgroundColor: '#F4D742',
          data: [
            1, 0
          ]
      }, {
          label: 'Failure',
          backgroundColor: '#FF0000',
          data: [
            1, 1
          ]
      }]
    }

    return (
      <div>
        <ProjectOverviewTable project={project} />
        <TestRunGraph data={data} />
      </div>
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