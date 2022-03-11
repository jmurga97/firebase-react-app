import React from "react";

const ProjectSummary = ({ project }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="card z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {`${project.authorFirstName} ${project.authorLastName}`}
        </p>
        <p className="grey-text">
          {project.timestamp.toDate().toLocaleDateString("es-ES", options)}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
