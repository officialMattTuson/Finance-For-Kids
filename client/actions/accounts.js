import { addAccountAPI, getAccountListAPI, viewAccountBalancesAPI } from "../apis/accounts"

export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const GET_ACCOUNTS = 'GET_ACCOUNTS'
export const VIEW_BALANCES = 'VIEW_BALANCES'

export function getAccounts (account) {
    return {
        type: GET_ACCOUNTS,
        payload: account
    }
}

export function addAccount (account) {
    return {
        type: ADD_ACCOUNT,
        payload: account
    }
}

export function viewBalances (balances) {
    return {
        type: VIEW_BALANCES,
        payload: balances
    }
}


export function fetchAccounts () {
  return async (dispatch) => {
    const result = await getAccountListAPI()
      dispatch(getAccounts(result))
  }
}

export function fetchBalances () {
    return async (dispatch) => {
        const result = await viewAccountBalancesAPI()
        dispatch(viewBalances(result))
    }
}

export function addAccountThunk (newAccount) {
    return async (dispatch) => {
        const result = await addAccountAPI(newAccount)
        dispatch(addAccount(result))
    }
}