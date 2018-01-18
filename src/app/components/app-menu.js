import { Menu } from 'semantic-ui-react'

class AppMenu extends React.Component {

  constructor(props) {
    super(props)
    console.log(props.defaultItem)
    console.log(this.props.defaultItem)
    this.state = { activeItem: this.props.defaultItem }
  }

  navigate(target) {
    this.setState({ activeItem: target})
    this.props.goToPage(target)
  }

  render() {

    let { user } = this.props
    let { activeItem } = this.state

    if (!user) {
      user = {name: "None"}
    }

    return(
      <Menu pointing secondary>
        <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={(e) => this.navigate('dashboard')} />
        <Menu.Item name='account' active={activeItem === 'account'} onClick={(e) => this.navigate('account')} />
        <Menu.Item name='projects' active={activeItem === 'projects'} onClick={(e) => this.navigate('projects')} />
        <Menu.Menu position='right'>
          <Menu.Item name='about-us' active={activeItem === 'about-us'} onClick={(e) => this.navigate('about-us')} />
          <Menu.Item header>{user.name}</Menu.Item>
          <Menu.Item icon='sign out' onClick={(e) => this.navigate('landingpage')}/>
        </Menu.Menu>
      </Menu>
    ) 
  }

}

export default AppMenu