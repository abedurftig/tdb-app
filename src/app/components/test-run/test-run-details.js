import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadTestRun } from '../../reducers/test-run-actions'

class TestRunDetails extends React.Component {
  
  componentDidMount() {
    if (this.props.user) {
      this.props.loadTestRun(this.props.match.params.id)
    }
  }

  render() {  
    if (this.props.testRun) {
      return <div>TestRunDetails {this.props.match.params.id} {this.props.testRun.id}</div>
    } else {
      return <div>TestRunDetails {this.props.match.params.id}</div>
    }
  }

}

const mapStateToProps = state => {
  return {
    user: state.session.user,
    testRun: state.testRun,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadTestRun
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestRunDetails)