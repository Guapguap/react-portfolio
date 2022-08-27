import React from "react";

import project from "../project.json";

function Wrapper(props) {
  return <div className="d-sm-flex flex-wrap ">{props.children}</div>;
}

function ProjectCard(props) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm">
          <h3 className="project-text">{props.name}</h3>
          <img className="project-img mx-auto img-thumbnail" alt={props.name} src={props.image} />
          <div className="content">
            <p className="project-text links">
            <span className="project-icon">
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square">

                </i>
              </a>
              </span>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-link"></i>
              </a>
            </p>
            <p className="tech project-text">({props.tech})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Wrapper>
      {project.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          name={project.name}
          github={project.github}
          link={project.link}
          tech={project.tech}
        />
      ))}
    </Wrapper>
  );
}
