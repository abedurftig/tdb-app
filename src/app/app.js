import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './components/home'
import About from './components/about'
import AccountScreen from './components/account'
import Projects from './components/projects/projects'
import Project from './components/projects/project'
import Dashboard from './components/dashboard'
import LandingPage from './components/landingpage'
import AppMenu from './components/app-menu'
import Login from './components/landingpage/login'
import { Segment, Button } from 'semantic-ui-react'
import { request } from './api'
import { setAuthUser, logout } from './reducers/session'

class App extends React.Component {
  
  state = { activeItem: 'projects', user: undefined, loading: true }
  refreshToken(loc) {

    if (sessionStorage.getItem('jwtToken')) {
      request("token-refresh")
      .then(user => {
        this.setState({loading: false})
        this.props.setAuthUser(user)
        this.goToPage(loc)
      })
      .catch(error => {
        this.setState({loading: false})
        sessionStorage.clear()
        this.goToPage("landingpage")
      })
    } else {
      this.setState({loading: false})
    }

  }

  goToPage = (name) => {
    this.props.goTo(name)
  }

  logout = () => {
    this.props.logout()
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
    let activeItem = this.props.location.pathname.split("/")[1] || 'projects'
    return (
      <div>
        <AppMenu goToPage={this.goToPage} logout={this.logout}
          user={this.props.user} activeItem={activeItem}/>
        {!this.state.loading && this.props.user && 
        <Segment>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/account" render={() => <AccountScreen user={this.props.user} />} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" component={Project} />
            <Redirect to="/projects"/>
          </Switch>
        </Segment>
        }
        {!this.state.loading && !this.props.user && 
        <Segment>
          <Switch>
            <Route exact path="/about-us" component={About} />
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
  setAuthUser,
  logout
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)