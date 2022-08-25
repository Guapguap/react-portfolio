import React from "react";

import project from "../project.json";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <p className="proj-icons-container">
          <a href={props.github}>
            <img
              className="project-icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.link}>
            <img
              className="project-icon"
              src="https://img.icons8.com/fluent/48/000000/domain.png"
              alt="Live Application"
            />
          </a>
        </p>
        <p className="tech">({props.tech})</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Bootcamp Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
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
    </section>
  );
}
