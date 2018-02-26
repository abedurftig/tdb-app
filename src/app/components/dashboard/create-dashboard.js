import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Button, Icon, Checkbox } from 'semantic-ui-react'
import Collapsible from '../common/collapsible'
import _ from 'lodash'

const style = {
  paddingTop: '10px'
}

const checkboxStyle = {
  paddingRight: '10px'
}

class CreateDashboard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { name: '', selectedProjectIds: [], showList: false }
  }

  handleChange = (event) => {
    event.preventDefault()
    let { name, value } = event.target
    this.setState({
      name: value
    })
  }

  handleSelectionChange = (event, data) => {
    event.preventDefault()
    let projectIds = this.state.selectedProjectIds, newId = data.value
    _.indexOf(projectIds, newId) === -1 ?
      projectIds.push(newId) :
      projectIds = projectIds.filter(pid => pid !== newId)      
    this.setState({
      selectedProjectIds: projectIds
    })
  }

  handlePartOne = (event) => {
    event.preventDefault();
    this.setState({
      showList: true
    })
  }

  handlePartTwo = (event) => {
    event.preventDefault()
    this.props.createHandler(this.state.name, this.state.selectedProjectIds)
    this.setState({
      showList: false,
      name: '',
      selectedProjectIds: []
    })
    this.inputRef.value = ''
  }

  handleCancel = (event) => {
    event.preventDefault()
    this.setState({
      showList: false,
      name: '',
      selectedProjectIds: []
    })
    this.inputRef.value = ''
  }

  handleRef = (c) => {
    if (c) {
      this.inputRef = c.inputRef
    }
  }

  render() {
    let disableAddButton = this.state.name.length < 3
    let showProjectList = this.state.showList && this.props.projects
    return (
      <div>
        <Input ref={this.handleRef} fluid type='text' onChange={this.handleChange}
          iconPosition='left' placeholder='Create dashboard...' action>
          <Icon key='add' name='add'/>
          <input/>
          {!this.state.showList && <Button disabled={disableAddButton} primary onClick={this.handlePartOne}>Add</Button>}
          {this.state.showList && <Button color='green' onClick={this.handlePartTwo}>Save</Button>}
          {this.state.showList && <Button onClick={this.handleCancel}>Cancel</Button>}
        </Input>  
        {showProjectList && <div style={style}>
          <p>Select projects for the new dashboard</p>
          {this.props.projects.map(p => 
            <Checkbox key={p.id} style={checkboxStyle} value={p.id} label={p.name} onChange={this.handleSelectionChange} />
          )}
        </div>}  
      </div>
    )
  }

}

const mapStateToProps = state => ({
  user: state.session.user,
  account: state.account
})

export default connect(
  mapStateToProps,
  null
)(CreateDashboard)