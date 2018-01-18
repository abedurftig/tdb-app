import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects/projects'
import Project from './components/projects/project'
import Dashboard from './components/dashboard'
import LandingPage from './components/landingpage'
import AppMenu from './components/app-menu'
import Login from './components/landingpage/login'
import { Segment, Button } from 'semantic-ui-react'
import { request } from './api'
import { setAuthUser } from './reducers/session'

class App extends React.Component {
  
  state = { activeItem: 'projects', user: undefined }

  refreshToken(loc) {

    if (sessionStorage.getItem('jwtToken')) {
      request("token-refresh")
      .then(user => {
        this.props.setAuthUser(user)
        // this.setState({ user })
        this.goToPage(loc)
      })
      .catch(error => {
        sessionStorage.clear()
        this.goToPage("landingpage")
      })
    }

  }

  goToPage = (name) => {
    // this.setState({activeItem: name})
    this.props.goTo(name)
  }

  componentDidMount() {
    const loc = this.props.location.pathname.replace('/', '')
    if (this.props.user) {
      if (loc) {
        this.goToPage(loc)
      }
    } else {
      this.refreshToken(loc)
    }
    
  }

  render() {
    let activeItem = this.props.location.pathname.replace('/', '') || 'projects'
    return (
      
      <div>
        <AppMenu goToPage={this.goToPage} 
          user={this.props.user} defaultItem={activeItem}/>
        {this.props.user && 
        <Segment>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" component={Project} />
            <Redirect to="/projects"/>
          </Switch>
        </Segment>
        }
        {!this.props.user && 
        <Segment>
          <Switch>
            <Route exact path="/landingpage" component={LandingPage} />
            <Redirect to="/landingpage"/>
          </Switch>
        </Segment>
        }
      
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