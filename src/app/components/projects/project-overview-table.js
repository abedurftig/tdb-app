import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import sortBy from 'lodash.sortby'

class ProjectOverviewTable extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { project } = this.props
    sortBy(project.testRuns, 'id')

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Num. Test Suites</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          {project &&
            sortBy(project.testRuns, 'id').map((tr, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{i+1}</Table.Cell>
                  <Table.Cell>{tr.id}</Table.Cell>
                  <Table.Cell>{tr.name}</Table.Cell>
                  <Table.Cell>{tr.testSuites.length}</Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>  
    )
  }

}

export default ProjectOverviewTable