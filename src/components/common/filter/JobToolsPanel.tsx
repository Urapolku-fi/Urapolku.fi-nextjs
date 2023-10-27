import styles from './jobToolsPanel.module.css';

const JobToolsPanel = () => {
  return (
    <div className={styles.jobToolsPanel}>
      <div className={styles.jobToolsHeader}>Työkalut</div>
      <div className={styles.jobToolsText}>
        <a href="https://example.com">Lorem</a>
      </div>
      <div className={styles.jobToolsText}>
        <a href="https://example.com">Ipsum</a>
      </div>
      <div className={styles.jobToolsText}>
        <a href="https://example.com">Dolor</a>
      </div>
      <div className={styles.jobToolsText}>
        <a href="https://example.com">Sit</a>
      </div>
      <div className={styles.jobToolsText}>
        <a href="https://example.com">Amet</a>
      </div>
    </div>
  );
};

export default JobToolsPanel;
