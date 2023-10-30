import styles from './adCard.module.css';

interface IAdCardProps {
  text: string;
}

const AdCard = ({ text }: IAdCardProps) => {
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
