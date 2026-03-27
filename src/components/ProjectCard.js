import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Fade from "./feature/Fade";

export const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row className="mt-1 py-3">
        <Col xs={12} md={6} lg={4}>
          <Fade left duration={1000} delay={500} distance="30px">
            <div className="project-text">
              <div className="project-p">
                <h3 className="project-title">{project.title}</h3>
                <span>{project.description}</span>
                {project.user && (<span className="project-loginInfo">{project.user}</span>)}
              </div>
              {project.live ? <a className="live_button" href={project.live}>
                  Visit Live
                </a> : 
                <a className="live_button delete">
                  Visit Live
                </a>}
              <a className="live_button s" href={project.repository}>
                Source Code
              </a>
            </div>
          </Fade>
        </Col>
        <Col xs={12} md={6} lg={10} xl={8} className="carusel_item">
          <Fade left duration={1000} delay={1000} distance="40px">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              id="carouselP"
              fade
            >
              {project?.images.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    {image.includes('webm') ? (
                      <video width="100%" autoPlay={true} muted={true} loop={true}>
                        <source src={image} type="video/webm" />
                      </video>
                    ) : (
                      <img
                        alt="First slide"
                        src={image}
                        height="100%"
                        className="d-block w-100"
                        loading="lazy"
                      />
                    )}
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};
