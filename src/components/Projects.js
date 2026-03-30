import { forwardRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projectsData";
import '../styles/projects.css'

export const Projects = forwardRef((props, projectsSection) => {

  return (
    <section className="projects" id="projects" ref={projectsSection}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <h2>Projects</h2>
          <p>
            Over the time i built several projects using the latest technologies,
            built responsive Single-Page-Apps (SPA) in React and also in Angular.
            Also build backend applications in Node.js, Express 
          </p>
          {projects.map((project, index) => {
            return (
              <Col className="mt-lg-5 py-3" xl={12} key={index}>
                <ProjectCard project={project} key={project.id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
});
