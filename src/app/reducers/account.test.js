import reducer from './account';
import * as Actions from './dashboard-actions';

describe('account reducer', () => {
    
  it('should return the initial state', () => {
     
    expect(
      reducer(undefined, {}))
    .toEqual({ id: undefined, name: undefined, dashboards: [] })

  })

  it('should handle dashboard created action', () => {
     
    let newDashboard = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    let stateAfter = {
      id: undefined,
      name: undefined,
      dashboards: [ newDashboard ]
    }

    expect(
      reducer(undefined, Actions.dashboardCreatedAction(newDashboard)))
    .toEqual(stateAfter)

  })

  it('should handle dashboard updated action', () => {
     
    let stateBefore = {
      dashboards: [
        {
          id: 1,
          name: "Dashboard One",
          projectIds: [1, 2, 3]
        },
        {
          id: 2,
          name: "Dashboard Two",
          projectIds: [4, 5]
        }
      ]
    }

    let updatedDashboard = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3, 7]
    }

    let stateAfter = {
      dashboards: [
        {
          id: 1,
          name: "Dashboard One",
          projectIds: [1, 2, 3, 7]
        },
        {
          id: 2,
          name: "Dashboard Two",
          projectIds: [4, 5]
        }
      ]
    }

    expect(
      reducer(stateBefore, Actions.dashboardUpdatedAction(updatedDashboard)))
    .toEqual(stateAfter)

  })

})