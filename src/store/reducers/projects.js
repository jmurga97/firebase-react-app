import {CREATE_PROJECT,RECEIVE_DATA} from '../actions/projects'

function projects(state = [], action){
    switch(action.type){
        case RECEIVE_DATA:
            return [...state, ...action.projects]
        case CREATE_PROJECT:
            return [
                ...state,
                action.project
            ]
        default:
            return state
    }
}

export default projects