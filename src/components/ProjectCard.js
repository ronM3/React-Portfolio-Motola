import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Fade from "./feature/Fade";

/**
 * Lazy-loads a WebM video only when it scrolls near the viewport.
 * The outer div reserves a 16:9 aspect-ratio box so the page layout
 * never shifts when the video element mounts or begins playing.
 */
const LazyVideo = ({ src }) => {
  const containerRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback for environments without IntersectionObserver
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        aspectRatio: "16 / 9",
        display: "block",
        width: "100%",
      }}
    >
      {isNearViewport && (
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          style={{ display: "block" }}
        >
          <source src={src} type="video/webm" />
        </video>
      )}
    </div>
  );
};

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
              {project?.images.map((media, index) => {
                return (
                  <Carousel.Item key={index}>
                    {media.type === "video" ? (
                      <LazyVideo src={media.src} />
                    ) : (
                      <img
                        alt={`${project.title} preview ${index + 1}`}
                        src={media.src}
                        width={media.width}
                        height={media.height}
                        className="d-block w-100"
                        loading="lazy"
                        decoding="async"
                        style={{ height: "auto" }}
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
