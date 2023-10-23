import { Button } from '@/components/core';
import styles from './compareBox.module.css';
import CompareJobCardSeperator from './CompareCardSeperator';
import CompareJobCard from './CompareJobCard';
import { classMerge as cm } from '@/lib/classMerge';

const CompareBox = ({ comparables, clearComparables, hidden, removeComparedJobById }: any) => {
  return (
    <section className={cm(styles.compareContainer, hidden ? styles.hidden : '')}>
      <CompareJobCard data={comparables[0]} removeComparedJobById={removeComparedJobById} />
      <CompareJobCardSeperator />
      <CompareJobCard data={comparables[1]} removeComparedJobById={removeComparedJobById} />
      <CompareJobCardSeperator />
      <CompareJobCard data={comparables[2]} removeComparedJobById={removeComparedJobById} />

      <div className={styles.buttonsContainer}>
        <Button>Compare</Button>
        <Button outline onClick={clearComparables}>
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default CompareBox;
