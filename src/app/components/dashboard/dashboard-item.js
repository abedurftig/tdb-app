import ProjectTestRunGraph from '../projects/auto-load-testrun-graph'
import { Segment } from 'semantic-ui-react'

export default (props) => {
  return (
    <Segment>
      <h2>{props.title}</h2>
      <ProjectTestRunGraph projectId={props.projectId}/>
    </Segment>
  )
}