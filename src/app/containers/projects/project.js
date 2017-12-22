import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getById
} from '../../reducers/projects'

class Project extends React.Component {
  
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.getById(this.props.match.params.id)
  }
  render() {  
    return (
      <div>
        <h1>Projects</h1>
        {this.props.project &&
          <p>This is project '{this.props.project.name}'</p>
        }
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