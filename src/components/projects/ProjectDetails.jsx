import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectDetails = ({ match }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectDetail = useSelector((state) => {
    const data = state.projects.filter((project) => project.id === id);
    return data[0];
  });

  const isAuthed = useSelector((state) =>
      Object.keys(state.authUser).length !== 0 ? true : false
    );

  useEffect(() => {


    if (!isAuthed) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="container section project-details">
      {projectDetail ? (
        <div className="card z-depth-2">
          <div className="card-content">
            <span className="card-title">{projectDetail.title} </span>
            <p>{projectDetail.content}</p>
            <div className="card-action grey-text">
              <div>
                Posted by{" "}
                {`${projectDetail.authorFirstName} ${projectDetail.authorLastName}`}
              </div>
              <div>2nd September</div>
            </div>
          </div>
        </div>
      ) : (
        <h5>This project does not exist</h5>
      )}
    </div>
  );
};

export default ProjectDetails;
