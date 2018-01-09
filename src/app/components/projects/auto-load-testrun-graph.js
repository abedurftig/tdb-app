import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getTestRunsSummary
} from '../../reducers/projects'
import TestRunGraph from './project-testrun-graph'

class ProjectTestRunsGraph extends React.Component {

  componentDidMount() {
      this.props.getTestRunsSummary(this.props.projectId)
  }

  render() {

    let result = <div>loading..</div>
    let { summary } = this.props

    if (summary) {
      let dataInput = buildDataInput(summary)
      let data = buildData(dataInput)  
      result = (
        <div>
          <TestRunGraph data={data} />
        </div>
      )
    }

    return result

  }

}

const buildDataInput = summary => {

  let labels = summary.map(tr => tr.externalId)
  let passed = summary.map(tr => tr.numPassed)
  let skipped = summary.map(tr => tr.numSkipped)
  let failed = summary.map(tr => tr.numFailed) 

  return {
    labels,
    passed,
    skipped,
    failed
  }

}

const buildData = dataInput => {

  return {
    labels: dataInput.labels,
    datasets: [{
        label: 'Passed',
        backgroundColor: '#039E1F',
        data: dataInput.passed
    }, {
        label: 'Skipped',
        backgroundColor: '#F4D742',
        data: dataInput.skipped
    }, {
        label: 'Failure',
        backgroundColor: '#FF0000',
        data: dataInput.failed
    }]
  }

}

const mapStateToProps = state => ({
  summary: state.projects.testRunsSummary,
  loadingSummary: state.projects.loadingSummary
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getTestRunsSummary
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTestRunsGraph)