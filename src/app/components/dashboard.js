import ProjectTestRunGraph from './projects/auto-load-testrun-graph'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Dashboard = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <h2>Project One</h2>  
        <ProjectTestRunGraph class="dashb" projectId={2} />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <h2>Project Two</h2>
        <ProjectTestRunGraph projectId={3}/>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Dashboard