import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const AnimationBackground = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  const options = {
    autoPlay: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    fullScreen: {
      enable: false,
    },
    fpsLimit: isMobile ? 40 : 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: !isMobile, mode: "push" },
        onhover: {
          enable: canHover,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#591dcf",
        distance: isMobile ? 120 : 150,
        enable: true,
        opacity: 0.5,
        width: 3.3,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: isMobile ? 0.8 : 1,
        straight: false,
      },
      number: {
        density: { enable: true, value_area: isMobile ? 700 : 800 },
        value: isMobile ? 24 : 40,
      },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5,
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle",
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: isMobile ? 4 : 5,
      },
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: "",
    },
    detectRetina: true,
  };
  return (
    <div className="banner__particles" aria-hidden="true">
      <Particles id="tsparticles" init={loadFull} options={options} />
    </div>
  );
};
