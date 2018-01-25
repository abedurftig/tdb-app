import { Segment, Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default (props) => {
  
  let { id, name } = props.dashboard

  let deleteDashboard = () => {
    props.deleteFunction(id)
  }

  return (
    <Segment secondary clearing size='large'>
      <Grid verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Link to={'/dashboards/' + id}>{name}</Link>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button icon='trash outline' floated='right' onClick={deleteDashboard}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}