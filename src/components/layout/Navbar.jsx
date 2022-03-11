import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = ({authUser}) => {

  const links = Object.keys(authUser).length !== 0 ? <SignInLinks/> : <SignOutLinks/>

  return (
    <nav className=" blue-grey darken-3">
      <div className="nav-wrapper container ">
        <Link to="/" className="brand-logo">
          Firebase React App
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return{
    authUser: state.authUser
  }
}

export default connect(mapStateToProps)(Navbar)