import React, { useRef } from "react";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../../store/actions/authed";
import { useNavigate } from 'react-router-dom';

const SignIn = ({setAuthedUser}) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", emailRef.current.value);
    console.log("password", passwordRef.current.value);
    setAuthedUser(emailRef.current.value,passwordRef.current.value)
    navigate('/')
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className="input-field">
          <button type="submit" className="btn light-blue darken-4 z-depth-1">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: (email,password) => dispatch(handleSetAuthedUser(email,password))
  }
}

export default connect(null,mapDispatchToProps)(SignIn);
