import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default (props) => {
  
  let { id, name} = props.dashboard

  return (
    <Segment secondary clearing size='large'>
      <Link to={'/dashboards/' + id}>{name}</Link>
    </Segment>
  )
}