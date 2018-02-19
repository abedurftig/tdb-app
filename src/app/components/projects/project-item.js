import { Segment, Button, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default (props) => {
  
  let { project, deleteFunction } = props
  
  let deleteProject = () => {
    deleteFunction(project.id)
  }

  return (
    <Segment secondary clearing size='large'>
      <Grid verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Link to={'/projects/' + project.id}>{project.name}</Link>
            <p>This project has {project.numTestRuns} test runs.</p>
            <i>The project key: {project.externalId}</i>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button icon='trash outline' floated='right' onClick={deleteProject}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}