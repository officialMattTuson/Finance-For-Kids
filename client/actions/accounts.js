import {
  addAccountAPI,
  getOneAccountAPI,
  deleteAccountAPI,
  getAccountListAPI,
} from '../apis/accounts'

export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const GET_ACCOUNTS = 'GET_ACCOUNTS'
export const DEL_ACCOUNT = 'DEL_ACCOUNT'
export const GET_ACCOUNT = 'GET_ACCOUNT'

export function getAccounts(account) {
  return {
    type: GET_ACCOUNTS,
    payload: account,
  }
}

export function getAccount(account) {
  return {
    type: GET_ACCOUNT,
    payload: account,
  }
}

export function addAccount(account) {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  }
}

export function deleteAccount(account) {
  return {
    type: DEL_ACCOUNT,
    payload: account,
  }
}

export function fetchAccounts() {
  return async (dispatch) => {
    const result = await getAccountListAPI()
    dispatch(getAccounts(result))
  }
}

export function fetchOneAccount(id) {
  return async (dispatch) => {
    const result = await getOneAccountAPI(id)
    console.log(result)
    dispatch(getAccount(result))
  }
}

export function addAccountThunk(newAccount, token) {
  return async (dispatch) => {
    const result = await addAccountAPI(newAccount, token)
    dispatch(addAccount(result))
  }
}

export function deleteAccountThunk(id, token) {
  return async (dispatch) => {
    await deleteAccountAPI(id, token)
      dispatch(deleteAccount(id))
  }
}
