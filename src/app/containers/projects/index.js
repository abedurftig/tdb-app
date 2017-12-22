import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  allProjects
} from '../../reducers/projects'

class Projects extends React.Component {
  
  componentDidMount() {
    this.props.allProjects()
  }
  render() {  

    let projectsEl = this.props.projects.map(pr => {
      return <li key={pr.id}><Link to={"/projects/" + pr.id}>{pr.name}</Link></li>
    })

    return (
      <div>
        <h1>Projects</h1>
        {!this.props.loading &&
          <p>Count: {this.props.projects.length}</p>
        }
        {
          <ul>
            {projectsEl}
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  loading: state.projects.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  allProjects
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
