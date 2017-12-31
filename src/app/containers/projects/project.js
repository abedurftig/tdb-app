import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getById
} from '../../reducers/projects'

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
                <p>{tr.id}</p>
              </div>
            }
          </div>
        }
      </div>
    )
  }

  handleSelect = tr => {
    this.setState({ selectedTestRun: tr })
    console.log(tr)
  }

  getTestRunsEl(project) {
    return (
      <ul>
      {
        project.testRuns.map(tr => {
          return <li key={tr.id} onClick={(e) => this.handleSelect(tr)}>{tr.name}</li>
        })
      }
      </ul>
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