import { Card } from 'semantic-ui-react'
import { Bar } from 'react-chartjs-2'

class TestRunGraph extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick(data) {
    if (data !== undefined && data.length > 0) {
      console.log("test run key: " + data[0]._model.label)
    }
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
        <Bar data={this.props.data} options={options} height={100} onElementsClick={this.handleClick}/>
      </Card>
    )
  }
  
}

export default TestRunGraph