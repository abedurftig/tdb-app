import { Card } from 'semantic-ui-react'
import { Bar } from 'react-chartjs-2'

class TestRunGraph extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const options = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      responsive: true,
      scales: {
          xAxes: [{
              stacked: true,
          }],
          yAxes: [{
              stacked: true
          }]
      }
    }

    return (
      <Card fluid>
        <Bar data={this.props.data} options={options} height="100"/>
      </Card>
    )
  }
  
}

export default TestRunGraph