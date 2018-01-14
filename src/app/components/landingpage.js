import { Grid, Image, Segment } from 'semantic-ui-react'

const LandingPage = () => (
    <Grid stackable columns={2}>
      <Grid.Column>
        <Segment>
          <h2>Create Account</h2>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <h2>Login</h2>
        </Segment>
      </Grid.Column>
    </Grid>
  )
  
  export default LandingPage