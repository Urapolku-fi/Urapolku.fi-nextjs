import styles from './filterLabel.module.css';

const FilterLabel = ({ text }: any) => {
  return <div className={styles.filterLabel}>{text}</div>;
};

export default FilterLabel;
