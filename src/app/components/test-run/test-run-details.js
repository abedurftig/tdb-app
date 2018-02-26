import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadTestRun } from '../../reducers/test-run-actions'
import FailedTestCases from './failed-test-cases'
import SkippedTestCases from './skipped-test-cases'

const everyThingPassed = testRun => {
  return testRun.failedTestCases.length === 0 &&
    testRun.skippedTestCases.length === 0 
}

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
        {this.props.testRun.failedTestCases.length > 0 && <FailedTestCases testRun={this.props.testRun} />}
        {this.props.testRun.failedTestCases.length > 0 && <p/>}
        {this.props.testRun.skippedTestCases.length > 0 && <SkippedTestCases testRun={this.props.testRun} />}
        {everyThingPassed(this.props.testRun) && <p>All tests passed!</p>}
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