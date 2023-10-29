import styles from './applyNow.module.css';

export const ApplyNow = ({ link }: any) => {
  return (
    <>
      <a className={styles.applyButton} href={link} target="_blank" rel="noreferrer">
        Apply now
      </a>
    </>
  );
};
