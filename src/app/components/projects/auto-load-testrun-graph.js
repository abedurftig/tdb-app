import TestRunGraph from './project-testrun-graph'
import { request } from '../../api'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProjectTestRunsGraph extends React.Component {

  constructor(props) {
    super(props)
    this.state = {summary: undefined}
  }

  componentDidMount() {
    request('project/' + this.props.projectId + '/testruns-summary')
    .then(summary => {
      this.setState({ summary })
    })
  }

  testCaseSelected = externalId => {
    let testRun = this.state.summary.filter(tr => tr.externalId === externalId)[0]
    this.props.goTo(testRun.id)
  }

  render() {

    let result = <div>loading..</div>
    let { summary } = this.state

    if (summary) {
      let dataInput = buildDataInput(summary)
      let data = buildData(dataInput)  
      result = (
        <div>
          <TestRunGraph data={data} clickHandler={this.testCaseSelected}/>
        </div>
      )
    }

    return result

  }

}

const buildDataInput = summary => {

  let labels = summary.map(tr => [tr.externalId, tr.creationDate])
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

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: (id) => push('/test-run/' + id),
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(ProjectTestRunsGraph)