import { Grid, Segment } from 'semantic-ui-react'
import CreateAccountForm from './create-account'
import LoginForm from './login'


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