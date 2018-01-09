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
      <h1>Projects</h1>
      <div>
        <p>Count: {projects.length}</p>
        <ul>
          {projectsEl}
        </ul>
      </div>
    </div>
  )

}

const mapStateToProps = state => ({
  projects: state.projects.all,
  loading: state.projects.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  allProjects
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)