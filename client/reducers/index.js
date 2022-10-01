import { combineReducers } from 'redux'
import user from './loggedInUser'
import accounts from './accounts'

export default combineReducers({
  user,
  accounts
})
