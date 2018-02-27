import { Card } from 'semantic-ui-react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

class TestRunGraph extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = data => {
    if (data !== undefined && data.length > 0) {
      this.props.clickHandler(data[0]._model.label[0])
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

const mapStateToProps = state => {
  return {
    user: state.session.user,
  }
}

export default connect(
  mapStateToProps,
  null
)(TestRunGraph)