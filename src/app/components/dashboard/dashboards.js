import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import DashboardItem from './dashboard-list-item'
import CreateDashboard from './create-dashboard'
import Collapsible from '../common/collapsible'
import { Divider } from 'semantic-ui-react'
import { allProjects } from '../../reducers/projects'
import { createDashboard, deleteDashboard } from '../../reducers/dashboard-actions'
import { loadAccount } from '../../reducers/account-actions'

class Dashboards extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.user) {
      if (!this.props.account) {
        this.props.loadAccount(this.props.user.accountId)
      }
      if (!this.props.projects) {
        this.props.allProjects(this.props.user.accountId)
      }
    }
    
  }

  render() {
    return (
      <div>
        <CreateDashboard projects={this.props.projects} 
          createHandler={this.props.createDashboard}/>
        <Divider clearing />
        {!this.props.hasDashboards && <p>You don't have any dashboards.</p>}
        {this.props.hasDashboards && <p>You currently have {this.props.dashboards.length} dashboards.</p>}
        {this.props.hasDashboards && <div>
          {this.props.dashboards.map(d => 
            <DashboardItem key={d.id} dashboard={d} deleteFunction={this.props.deleteDashboard}/>
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
    projects: state.projects.all,
    dashboards: dbs,
    hasDashboards: dbs.length > 0
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loadAccount,
  allProjects,
  createDashboard,
  deleteDashboard
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboards)