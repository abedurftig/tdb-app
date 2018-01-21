import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import DashboardItem from './dashboard-list-item'

import { loadAccount } from '../../reducers/account-actions'

class Dashboards extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.account && this.props.user) {
      this.props.loadAccount(this.props.user.accountId)
    }
  }

  render() {
    return (
      <div>
        {!this.props.hasDashboards && <p>You don't have any dashboards</p>}
        {this.props.hasDashboards && <div>
          {this.props.dashboards.map(d => 
            <DashboardItem key={d.id} dashboard={d}/>
          )}
        </div>}
      </div>
    )
  }

}

const mapStateToProps = state => {
  let dbs = _.get(state, 'account.dashboards', [])
  return {
    user: state.session.user,
    account: state.account,
    dashboards: dbs,
    hasDashboards: dbs.length > 0
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadAccount
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboards)