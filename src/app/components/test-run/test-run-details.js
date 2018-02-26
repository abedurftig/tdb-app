import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadTestRun } from '../../reducers/test-run-actions'
import FailedTestCases from './failed-test-cases'
import SkippedTestCases from './skipped-test-cases'

class TestRunDetails extends React.Component {
  
  componentDidMount() {
    if (this.props.user) {
      this.props.loadTestRun(this.props.match.params.id)
    }
  }

  render() {  
    if (this.props.testRun) {
      return (
      <div>
        <h2>Test Run {this.props.testRun.externalId}</h2>
        <FailedTestCases testRun={this.props.testRun} />
        <SkippedTestCases testRun={this.props.testRun} />
      </div>
      )
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