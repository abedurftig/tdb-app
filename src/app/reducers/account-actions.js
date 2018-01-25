import * as Api from '../api'

export const REQUEST_ACCOUNT = 'account/REQUEST_ACCOUNT'
export const ACCOUNT_RECEIVED = 'account/ACCOUNT_RECEIVED'

export const loadAccount = accountId => {

  return dispatch => {
    dispatch(requestAccountAction(accountId))
    return Api.request('account/' + accountId)
    .then(account => {
      dispatch(accountReveivedAction(account))
    })
  }
}

export const requestAccountAction = accountId => {
  return {
    type: REQUEST_ACCOUNT,
    accountId
  }
}

export const accountReveivedAction = account => {
  return {
    type: ACCOUNT_RECEIVED,
    account
  }
}
