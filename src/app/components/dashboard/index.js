import DashboardItem from './dashboard-item'
import { makeGridItems } from './util/grid-helper'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Dashboard = (props) => {

  // let { dashboardItems, numberOfColumns } = props

  let numberOfColumns = 2
  let dashboardItems = [
    { name: "tdb-app", projectId: 354 },
    { name: "tdb-service", projectId: 353 }
  ]

  let gridItems = makeGridItems(dashboardItems, numberOfColumns)

  let buildElement = () => {
    let element = gridItems.map((row, i) => {
      return (
        <Grid.Row key={i}>
          {
            row.map(item => {
              return (
                <Grid.Column key={item.projectId}>
                  <DashboardItem title={item.name} projectId={item.projectId} />
                </Grid.Column>
              )
            })
          }
        </Grid.Row>
      )
    })
    return element
  }

  return (
    <Grid stackable columns={numberOfColumns}>
      {buildElement()}
    </Grid>
  )
 
}

export default Dashboard