import React from "react";
import frontend from "../assets/frontend.webp";
import backend from "../assets/backend.webp";
import { Col, Row } from "react-bootstrap";

export const Tecks = () => {
  return (
    <section className="tecks">
      <Row className="align-items-center justify-content-center">
        <h2>Skills</h2>
        <Col xs={6} md={6} xl={3}>
          <div className="skill_type">
            <img
              className="skills_images"
              src={frontend}
              alt="Frontend development"
              width="512"
              height="512"
              loading="lazy"
              style={{ height: "auto" }}
            />
            <h3>Front End</h3>
          </div>
        </Col>
        <Col xs={6} md={6} xl={3}>
          <div className="skill_type">
            <img
              className="skills_images"
              src={backend}
              alt="Backend development"
              width="512"
              height="512"
              loading="lazy"
              style={{ height: "auto" }}
            />
            <h3>Back End</h3>
          </div>
        </Col>
      </Row>
    </section>
  );
};
