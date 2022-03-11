import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

const Dashboard = (props) => {

  return(
    <div className="dashboard container">
    {Object.keys(props.authUser).length !== 0 ? (
      <main className="row">
        <div className="col s12 m6">
          <ProjectList projects={props.projects} />
        </div>
        <aside className="col s12 m5 offset-m1">
          <Notifications />
        </aside>
      </main>
    ) : (
      <p>Please, sign in to see projects</p>
    )}
  </div>
  )

};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
