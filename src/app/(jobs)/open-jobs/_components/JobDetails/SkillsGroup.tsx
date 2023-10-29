import styles from './skillsGroup.module.css';

export const SkillsGroup = ({ skills }: any) => {
  return (
    <div className={styles.skillsGroup}>
      <h2 className={styles.skillsGroupHeader}>Key Skills</h2>
      <div className={styles.skillsGroupSkills}>
        {skills.map((skill: any, i: number) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
