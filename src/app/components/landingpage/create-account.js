import { Input, Form, Button, Message } from 'semantic-ui-react'

class CreateAccountForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      success: false,
      errorMessage: "",
      accountInformation: {
        accountName: '',
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
      accountInformation: Object.assign({}, this.state.accountInformation, { [name]: value })
    })

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

    function handleErrors(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
    }

    fetch(window.env.API_URL + "/account", options)
      .then( response => {
        if (!response.ok) { throw response }
        return response.json()  //we only get here if there is no error
      })
      .then( json => {
        this.setState({ 
          success: true,
          errorMessage: "",
          accountInformation: {
            accountName: '',
            email: '',
            password: ''
          }
        })
      })
      .catch( errData => {
        errData.text().then( err => {
          this.setState({errorMessage: JSON.parse(err).message, success: false})
        })
      })
  }

  render() {
    return (
    <Form onSubmit={this.handleSubmit} success error>
      <Message hidden={!this.state.success}
        success
        header="Account has been created!"
        content="You can now login."
      ></Message>
      <Message hidden={this.state.errorMessage.length == 0} error>
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

export default CreateAccountForm