import { Route, Link, Redirect } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Projects from './containers/projects'
import Project from './containers/projects/project'

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" render={() => <Redirect to="/projects"/>} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
        </main>
        <footer className="footer">
          <div className="container">
            <Link to="/about-us">About Us</Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default App