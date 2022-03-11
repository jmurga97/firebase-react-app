import {CREATE_USER, RECEIVE_USER} from '../actions/authUsers'

function authedUsers(state = {}, action){
    switch(action.type){
        case RECEIVE_USER:
            return{
                ...state,
                ...action.users
            }
        case CREATE_USER:
            return {
                ...state,
                [action.user.authorId]:{
                    ...action.user
                }
            }
        default:
            return state
    }
}

export default authedUsers