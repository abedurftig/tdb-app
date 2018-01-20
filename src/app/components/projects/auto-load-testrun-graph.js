import TestRunGraph from './project-testrun-graph'
import { request } from '../../api'

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

  render() {

    let result = <div>loading..</div>
    let { summary } = this.state

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

export default ProjectTestRunsGraph