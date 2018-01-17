import { Input, Form, Button, Message } from 'semantic-ui-react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { request } from '../../api'
import { setAuthUser } from '../../reducers/session'

class LoginForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      errorMessage: "",
      login: {
        email: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      login: Object.assign({}, this.state.login, { [name]: value })
    })
  }

  componentWillUpdate (nextProps, nextState) {
    // console.log(nextProps)
    //   console.log(nextState)
    if (nextProps.user) {
      this.props.goTo("projects")
    }
  }

  handleSubmit(event) {
    
    event.preventDefault();
    
    let data = {
      username: this.state.login.email,
      password: this.state.login.password
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = {
      method: "POST",
      body: JSON.stringify(data),
      headers
    } 

    fetch(process.env.API_URL + "/login", options)
      .then(response => {
        let token = response.headers.get('Authorization')
        sessionStorage.setItem("jwtToken", token)
        return response.json()
      })
      .then(user => {
        this.props.setAuthUser(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
    <Form onSubmit={this.handleSubmit} success error>
      <Message hidden={this.state.errorMessage.length == 0} error>
        <Message.Content>
          <Message.Header>There was a small issue.</Message.Header>
          <p>{this.state.errorMessage}</p>
        </Message.Content>
      </Message>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' 
        name="email" onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' 
        type="password" name="password" onChange={this.handleChange}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
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
)(LoginForm)