import styles from './adCard.module.css';

const AdCard = ({ text }: any) => {
  return (
    <div className={styles.adCard}>
      <div className={styles.adCardOverlay}>
        <div className={styles.adCardTextContainer}>
          <div className={styles.adCardText}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
