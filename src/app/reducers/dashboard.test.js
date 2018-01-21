import reducer from './dashboard';
import * as Actions from './dashboard-actions';

describe('session reducer', () => {
    
  it('should return the initial state', () => {
     
    expect(
      reducer(undefined, {}))
    .toEqual({ id: undefined, name: undefined, projectIds: [] })

  })

  it('should handle dashboard created action', () => {
     
    let dashboardAfter = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    expect(
      reducer(undefined, Actions.dashboardCreatedAction(dashboardAfter)))
    .toEqual(dashboardAfter)

  })

  it('should handle dashboard project updated action (add project)', () => {
     
    let dashboardBefore = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    let dashboardAfter = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3, 4]
    }

    expect(
      reducer(dashboardBefore, Actions.dashboardUpdatedAction(dashboardAfter)))
    .toEqual(dashboardAfter)

  })

  it('should handle dashboard project updated action (remove project)', () => {
     
    let dashboardBefore = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    let dashboardAfter = {
      id: 1,
      name: "New Name",
      projectIds: [1, 2]
    }

    expect(
      reducer(dashboardBefore, Actions.dashboardUpdatedAction(dashboardAfter)))
    .toEqual(dashboardAfter)

  })

  it('should match by id', () => {
     
    let dashboardBefore = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    let dashboardAfter = {
      id: 1,
      name: "Dashboard One",
      projectIds: [1, 2, 3]
    }

    expect(
      reducer(dashboardBefore, { type: Actions.DASHBOARD_UPDATED, dashboard: {id: 2, name: "Not this one", projectIds: []} }))
    .toEqual(dashboardAfter)

  })

})