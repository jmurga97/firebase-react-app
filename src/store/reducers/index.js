import authedUsers from './authUser';
import projects from './projects'
import authUser from './authed';
import { combineReducers } from "redux";

export default combineReducers({
    authUser,
    authedUsers,
    projects
})