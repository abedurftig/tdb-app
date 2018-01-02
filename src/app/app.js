import { Route, Link, Redirect } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects/projects'
import Project from './components/projects/project'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment'

class App extends React.Component {
  
  state = { activeItem: 'projects' }

  goToPage = (name) => {
    this.setState({activeItem: name})
    this.props.goTo(name)
  }

  componentDidMount() {
    const loc = this.props.location.pathname.replace('/', '')
    if (loc) {
      this.goToPage(loc)
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='account' active={activeItem === 'account'} onClick={(e) => this.goToPage('account')} />
          <Menu.Item name='projects' active={activeItem === 'projects'} onClick={(e) => this.goToPage('projects')} />
          <Menu.Menu position='right'>
            <Menu.Item name='about-us' active={activeItem === 'about-us'} onClick={(e) => this.goToPage('about-us')} />
          </Menu.Menu>
        </Menu>
        <Segment>
          <Route exact path="/" render={() => <Redirect to="/projects"/>} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  goTo: (name) => push('/' + name)
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(App)