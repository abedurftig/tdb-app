import reducer from './account';
import * as DashboardActions from './dashboard-actions';
import * as AccountActions from './account-actions';

describe('account reducer', () => {
    
  it('should return the initial state', () => {
     
    expect(
      reducer(undefined, {}))
    .toEqual(null)

    expect(
      reducer(null, {}))
    .toEqual(null)

  })

  it('should handle account received', () => {
     
    let account = {
      id: 1,
      name: "Test Account",
      dashboards: []
    }

    expect(
      reducer(undefined, AccountActions.accountReveivedAction(account)))
    .toEqual(account)

  })

  it('should handle dashboard created action', () => {
     
    let stateBefore = {
      id: undefined,
      name: undefined,
      dashboards: []
    }

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
      reducer(stateBefore, DashboardActions.dashboardCreatedAction(newDashboard)))
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
      reducer(stateBefore, DashboardActions.dashboardUpdatedAction(updatedDashboard)))
    .toEqual(stateAfter)

  })

  it('should handle dashboard deleted action', () => {
     
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

    let stateAfter = {
      dashboards: [
        {
          id: 2,
          name: "Dashboard Two",
          projectIds: [4, 5]
        }
      ]
    }

    expect(
      reducer(stateBefore, DashboardActions.dashboardDeletedAction(1)))
    .toEqual(stateAfter)

  })

})