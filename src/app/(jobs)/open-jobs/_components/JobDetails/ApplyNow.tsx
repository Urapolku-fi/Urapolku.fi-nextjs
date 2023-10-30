import styles from './applyNow.module.css';

interface IApplyNowProps {
  link: string;
}

export const ApplyNow = ({ link }: IApplyNowProps) => {
  return (
    <>
      <a className={styles.applyButton} href={link} target="_blank" rel="noreferrer">
        Apply now
      </a>
    </>
  );
};
