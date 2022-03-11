import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogOutUser } from "../../store/actions/authed";

const SignInLinks = (props) => {
  const onLogOut = () => {
    props.logOut();
  };

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        <button className="btn-small" onClick={() => onLogOut()}>Log Out</button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating light-blue darken-4">
          {props.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  const authedUser = state.authedUsers[state.authUser]
  return {
    initials: authedUser.initials
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(handleLogOutUser),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);
