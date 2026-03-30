import React, { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from "../data/skillsData";
import { SkillCard } from "./SkillCard";
import { Tecks } from "./Tecks";
import '../styles/skills.css'
import Fade from "./feature/Fade";

export const Skills = forwardRef((props, skillsSection) => {
  const [scrolled, setScrolled] = useState(false);
  const revealRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const element = revealRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setScrolled(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrolled(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className='skills' ref={skillsSection}>
      <Container style={{ overflow: "hidden" }}>
        <Tecks/>
        <Row className="align-items-center" ref={revealRef}>
          <Fade up when={scrolled}>
            <Col xs={12} md={6} xl={12}>
              <div className="skill_box">
              <h3>Programming languages & Technologies</h3>
                <p className="skill-p">
                Learning and practicing full stack programming for the last 1.5 years and have a strong foundation in both front-end and back-end development.
                I am humble developer and doing my best to keep my code transparent and easy to understand to enable more people to be involved in what i create, and i believe that continues feedback is the key to success and the way to go.
                </p>

                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={300}
                  transitionDuration={1000}
                  infinite={true}
                  className="skills-slider"
                >
                  {skillsData.map((skill) => {
                    return <SkillCard skill={skill} key={skill.name} alt />;
                  })}
                </Carousel>
              </div>
            </Col>
          </Fade>
        </Row>
      </Container>
    </section>
  );
});
