import { Card } from 'semantic-ui-react'
import { Bar } from 'react-chartjs-2'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TestRunGraph extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = data => {
    if (data !== undefined && data.length > 0) {
      this.props.goTo(data[0]._model.label[0])
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

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: (externalId) => push('/test-run/' + externalId),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestRunGraph)