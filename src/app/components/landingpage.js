import { Grid, Image, Segment, Input, Form, Button, Message } from 'semantic-ui-react'

const onSubmit = (event, data) => {

  event.preventDefault();
  console.log(data);

}

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
      <Message
        success
        header='Form Completed'
        content="You're all signed up for the newsletter"
      ></Message>
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

class CreateAccountForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      errorMessage: "",
      accountInformation: {
        accountName: '',
        email: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      accountInformation: Object.assign({}, this.state.accountInformation, { [name]: value })
    })
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.message);
    }
    return response;
  }

  handleSubmit(event) {
    event.preventDefault();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = {
      method: "POST",
      body: JSON.stringify(this.state.accountInformation),
      headers
    } 

    fetch(process.env.API_URL + "/account", options)
    .then(this.handleErrors)
    .then(function(response) {
        return response.json()
    }).then(function(data) {
      this.setState({ 
        completed: true,
        accountInformation: {
          accountName: '',
          email: '',
          password: ''
        }})
    }.bind(this)).catch(function(error) {
      this.setState({errorMessage: error.message})
    }.bind(this))

  }

  render() {
    return (
    <Form onSubmit={this.handleSubmit} success error>
      <Message hidden={!this.state.completed}
        success
        header="Account has been created!"
        content="You can now login."
      ></Message>
      <Message hidden={!this.state.errorMessage || this.state.errorMessage.length == 0} error>
        <Message.Content>
          <Message.Header>There was a small issue.</Message.Header>
          <p>{this.state.errorMessage}</p>
        </Message.Content>
      </Message>
      <Form.Field>
        <label>Account Name</label>
        <input placeholder='Account Name' 
        name="accountName" onChange={this.handleChange} />
      </Form.Field>
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

const LandingPage = () => (
    <Grid stackable columns={2} padded='horizontally'>
      <Grid.Column>
        <Segment>
          <h3>Create Account</h3>
          <CreateAccountForm />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <h3>Login</h3>
          <LoginForm />
        </Segment>
      </Grid.Column>
    </Grid>
  )
  
  export default LandingPage