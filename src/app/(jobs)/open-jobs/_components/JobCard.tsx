import styles from './jobCard.module.css';
import Image from 'next/image';
import { Button, Checkbox, useCheckbox } from '@/components/core';
import { useEffect } from 'react';
import Bookmark from '@/components/icons/Bookmark';

const JobCard = ({ data, comparedJobs, setComparedJobs }: any) => {
  const checkbox = useCheckbox();

  useEffect(() => {
    if (checkbox.checked) setComparedJobs([...comparedJobs, data]);
    else setComparedJobs(comparedJobs.filter((job: any) => job.id !== data.id));
  }, [checkbox.checked, comparedJobs, data, setComparedJobs]);

  return (
    <div className={styles.container}>
      <div className={styles.imageTitleContainer}>
        {/* //TODO: use real image and alt */}
        <Image
          width="47"
          height="47"
          alt="Logo of example company"
          src="/pictures/job-example-image.png"
        />
        <p>Company Name</p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>Role (position)</p>
        <p className={styles.info}>Industry</p>
        <p className={styles.info}>Job Type | Work Type</p>
        <p className={styles.info}>Annual or monthly salary</p>
        <p className={styles.info}>Location</p>
      </div>
      <div className={styles.buttonContainer}>
        <Checkbox {...checkbox} text="Add to compare" />
        <div className={styles.buttons}>
          <Button>See Details</Button>
          <Button variant="icon" outline>
            <Bookmark />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
