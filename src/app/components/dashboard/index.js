import DashboardItem from './dashboard-item'
import { makeGridItems } from './util/grid-helper'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { loadAccount } from '../../reducers/account-actions'

const buildElement = (gridItems) => {
  let element = gridItems.map((row, i) => {
    return (
      <Grid.Row key={i}>
        {
          row.map(item => {
            return (
              <Grid.Column key={item}>
                <DashboardItem title={item} projectId={item} />
              </Grid.Column>
            )
          })
        }
      </Grid.Row>
    )
  })
  return element
}

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.account && this.props.user) {
      this.props.loadAccount(this.props.user.accountId)
    }
  }

  render() { 
    if (this.props.match.params.id && this.props.dashboards.length > 0) {
      let numberOfColumns = this.props.numberOfColumns || 2
      let dashboard = this.props.dashboards.filter(d => d.id == this.props.match.params.id)[0]
      let gridItems = makeGridItems(dashboard.projectIds, numberOfColumns)
      return (
        <Grid stackable columns={numberOfColumns}>
          {buildElement(gridItems)}
        </Grid>
      )
    } else {
      return <p>loading..</p>
    }
  }
}

const mapStateToProps = state => {
  let dbs = _.get(state, 'account.dashboards', [])
  return {
    user: state.session.user,
    account: state.account,
    dashboards: dbs
  }  
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadAccount
}, dispatch)

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(Dashboard))