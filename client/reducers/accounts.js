import { VIEW_BALANCES, ADD_ACCOUNT, GET_ACCOUNTS} from '../actions/accounts'

const reducer = (state = [], action) => {
    const { type, payload } = action
    switch(type) {
        case VIEW_BALANCES:
            return payload
        case GET_ACCOUNTS:
            return payload
        case ADD_ACCOUNT:
            return [...state, payload]
        default:
            return state
        
    }
}
export default reducer