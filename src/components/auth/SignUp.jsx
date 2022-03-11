import React, { useRef } from "react";
import { connect } from "react-redux";
import { handleCreateUser } from "../../store/actions/authUsers";

const SignUp = ({ createUser }) => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let authorFirstName = formData.get("firstName");
    let authorLastName = formData.get("lastName");
    const initials = `${authorFirstName[0]}${authorLastName[0]}`
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
      authorFirstName,
      authorLastName,
      initials
    };
    createUser(user);
    form.current.reset();

  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white" ref={form}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required/>
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required/>
        </div>
        <div className="input-field">
          <button type="submit" className="btn light-blue darken-4 z-depth-1">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(handleCreateUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
