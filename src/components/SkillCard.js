export const SkillCard = ({ skill }) => {
  return (
    <div className="skill_item">
      <img
        className="skill_img"
        src={skill.img}
        alt={skill.name}
        width={skill.width}
        height={skill.height}
        loading="lazy"
        decoding="async"
        style={{ height: "auto" }}
      />
      <h3 className="skill_name">{skill.name}</h3>
    </div>
  );
};
