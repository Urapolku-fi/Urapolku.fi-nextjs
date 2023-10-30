import styles from './skillsGroup.module.css';

interface ISkillsGroupProps {
  skills: string[];
}

export const SkillsGroup = ({ skills }: ISkillsGroupProps) => {
  return (
    <div className={styles.skillsGroup}>
      <h2 className={styles.skillsGroupHeader}>Key Skills</h2>
      <div className={styles.skillsGroupSkills}>
        {skills.map((skill, i) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
