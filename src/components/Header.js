import { Container, Row, Col } from "react-bootstrap";
import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import headerImg from "../assets/Rocket-Black5.webp";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../styles/banner.css";

const AnimationBackground = lazy(() =>
  import("./feature/AnimationBackground").then((module) => ({
    default: module.AnimationBackground,
  }))
);

export const Header = forwardRef((props, homeSection) => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(() => setShowParticles(true), {
        timeout: 1200,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => setShowParticles(true), 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="banner" id="home" ref={homeSection}>
      {showParticles ? (
        <Suspense fallback={null}>
          <AnimationBackground />
        </Suspense>
      ) : null}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="main-text">
              <h1 className="animated-text">Hi!</h1>
              <h1 className="animated-text first">I'm Ron Motola</h1>
              <h1 className="animated-text second">
                {"Full Stack Developer"}
              </h1>
            </div>
            <div className="connect-box">
              <p id="fadeInP">
                With knowledge and experience in writing SPA and using the
                latest WEB technologies by building web applications and
                responsive website. Developing new features and improving
                existing ones always excites me.
              </p>
              <div className="bt_container">
                <a href="#contacts" className="banner_cta">
                  Let's Connect <ArrowRightCircle size={25} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="Rocket illustration"
              width="247"
              height="247"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              style={{ display: "block" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
});
