import { ADD_ACCOUNT, GET_ACCOUNTS, DEL_ACCOUNT, GET_ACCOUNT} from '../actions/accounts'

const reducer = (state = [], action) => {
    const { type, payload } = action
    switch(type) {
        case GET_ACCOUNTS:
            return payload
        case GET_ACCOUNT:
            return payload
        case ADD_ACCOUNT:
            return [...state, payload]
        case DEL_ACCOUNT:
            return state.filter((account) => account.id != payload)
        default:
            return state
        
    }
}
export default reducer