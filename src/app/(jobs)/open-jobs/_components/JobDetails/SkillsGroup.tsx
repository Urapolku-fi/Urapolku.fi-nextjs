import './skillsGroup.css';

export const SkillsGroup = ({ skills }: any) => {
  return (
    <div className="skillsGroup">
      <h2 className="skillsGroup-header">Key Skills</h2>
      <div className="skillsGroup-skills">
        {skills.map((skill: any, i: number) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
