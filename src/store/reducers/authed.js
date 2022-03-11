import { LOGIN_USER, LOGOUT_USER } from "../actions/authed";

function authUser(state = {}, action){
    switch(action.type){
        case LOGIN_USER:
            return action.user
        case LOGOUT_USER:
            return {}
        default:
            return state
    }
}

export default authUser