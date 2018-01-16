import { Route, Link, Redirect } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects/projects'
import Project from './components/projects/project'
import Dashboard from './components/dashboard'
import LandingPage from './components/landingpage'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment'
import { request } from './util'
import { setAuthUser } from './reducers/session'

class App extends React.Component {
  
  state = { activeItem: 'projects', user: undefined }

  refreshToken(loc) {

    if (sessionStorage.getItem('jwtToken') !== undefined) {
      request("token-refresh")
      .then(user => {
        console.log("User is ided by token.")
        this.props.setAuthUser(user)
        this.setState({ user })
        this.goToPage(loc)
      })
      .catch(error => {
        console.log("Could not refresh the token.")
        // sessionStorage.clear()
        this.goToPage("landingpage")
      })
    }

  }

  goToPage = (name) => {
    this.setState({activeItem: name})
    this.props.goTo(name)
  }

  componentDidMount() {
    const loc = this.props.location.pathname.replace('/', '')
    if (this.state.user) {
      if (loc) {
        this.goToPage(loc)
      }
    } else {
      this.refreshToken(loc)
    }
    
  }

  render() {
    const { activeItem } = this.state
    return (
      
      <div>
        
        {this.state.user && 
          <div>
          <Menu pointing secondary>
          <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={(e) => this.goToPage('dashboard')} />
          <Menu.Item name='account' active={activeItem === 'account'} onClick={(e) => this.goToPage('account')} />
          <Menu.Item name='projects' active={activeItem === 'projects'} onClick={(e) => this.goToPage('projects')} />
          <Menu.Menu position='right'>
            <Menu.Item name='about-us' active={activeItem === 'about-us'} onClick={(e) => this.goToPage('about-us')} />
            <Menu.Item header>{this.state.user.name}</Menu.Item>
          </Menu.Menu>
        </Menu> 
        
        <Segment>
          <Route exact path="/" render={() => <Redirect to="/landingpage"/>} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/landingpage" component={LandingPage} />
        </Segment>
        </div>
        }
        <Segment>
          <Route path="/landingpage" component={LandingPage} />
        </Segment>
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: (name) => push('/' + name),
  setAuthUser
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)