import { Segment, Button, Grid } from 'semantic-ui-react'

export default (props) => {
  
  let { project, deleteFunction } = props
  
  let deleteProject = () => {
    console.log("delete p")
    deleteFunction(project.id)
  }

  return (
    <Segment secondary clearing size='large'>
      <Grid verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <b>{project.name}</b>
            <p>This project has {project.numTestRuns} test runs.</p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button icon='trash outline' floated='right' onClick={deleteProject}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}