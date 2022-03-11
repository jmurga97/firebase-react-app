import React, { useEffect, useRef } from "react";
import { handleCreateProject } from "../../store/actions/projects";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProject = ({authorFirstName,authorLastName,isAuthed,createProject}) => {

  const navigate = useNavigate()
  const titleRef = useRef(null);
  const contentRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      authorFirstName,
      authorLastName
    };
    createProject(project);
    navigate('/')
  };

  useEffect(() => {
    if(!isAuthed){
      navigate('/signin')
    }
  },[])

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            type="text"
            id="content"
            className="materialize-textarea"
            required
            ref={contentRef}
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn light-blue darken-4 z-depth-1">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const authedUser = state.authedUsers[state.authUser]
  const isAuthed = Object.keys(state.authUser).length !== 0 ? true : false
  let authorFirstName = ''
  let authorLastName = ''
  if(isAuthed){
    authorFirstName = authedUser.authorFirstName
    authorLastName = authedUser.authorLastName
  }
  return {
    authorFirstName,
    authorLastName,
    isAuthed
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(handleCreateProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
