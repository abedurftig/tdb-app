import { Menu, Dropdown, Icon} from 'semantic-ui-react'

class AppMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  navigate(target) {
    this.props.goToPage(target)
  }

  logout() {
    this.props.logout()
  }

  render() {

    let { user, activeItem } = this.props
    
    return(
      <Menu pointing secondary>
        {/* <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={(e) => this.navigate('dashboard')} /> */}
        {user && <Menu.Item name='account' active={activeItem === 'account'} onClick={(e) => this.navigate('account')} />}
        {/* {user && <Menu.Item name='dashboards' active={activeItem === 'dashboards'} onClick={(e) => this.navigate('dashboards')} />} */}
        {user && <Menu.Item name='projects' active={activeItem === 'projects'} onClick={(e) => this.navigate('projects')} />}
        <Menu.Menu position='right'>
        {!user && <Menu.Item name='login' active={activeItem === 'landingpage'} onClick={(e) => this.navigate('landingpage')} />}
          <Menu.Item name='about-us' active={activeItem === 'about-us'} onClick={(e) => this.navigate('about-us')} />
          {user && <Menu.Item header>{user.name}</Menu.Item>}
          {user && <Dropdown icon='user' item compact >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}
        </Menu.Menu>
      </Menu>
    ) 
  }

}

export default AppMenu