import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const SkillCard = ({ skill }) => {
  return (
    <div className="skill_item">
      <img
        className="skill_img"
        src={skill.img}
        alt={skill.name}
        loading="lazy"
      />
      <h3 className="skill_name">{skill.name}</h3>
    </div>
  );
};
