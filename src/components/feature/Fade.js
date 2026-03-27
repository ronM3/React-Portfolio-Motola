import { Children, cloneElement, isValidElement, useEffect, useState } from "react";

const getHiddenTransform = ({ left, up, distance }) => {
  const offset = distance || "24px";

  if (left) {
    return `translate3d(-${offset}, 0, 0)`;
  }

  if (up) {
    return `translate3d(0, ${offset}, 0)`;
  }

  return "translate3d(0, 0, 0)";
};

const Fade = ({
  children,
  when,
  left = false,
  up = false,
  duration = 1000,
  delay = 0,
  distance = "24px",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(typeof when === "boolean" ? when : true);
  }, [when]);

  const child = Children.only(children);

  if (!isValidElement(child)) {
    return child;
  }

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0)" : getHiddenTransform({ left, up, distance }),
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
    willChange: "opacity, transform",
    ...child.props.style,
  };

  return cloneElement(child, {
    style,
  });
};

export default Fade;
