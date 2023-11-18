import styles from './jobCard.module.css';
import { Button } from '@/components/core';
import Bookmark from '@/components/icons/Bookmark';

export interface JobCardData {
  company: string;
  title: string;
  area: string;
  field: string;
  type: string;
  salary: string;
  location: string;
  id: number;
}

interface JobCardProps {
  data: JobCardData;
  comparedJobs: JobCardData[];
  setComparedJobs: (newComparedJobs: JobCardData[]) => void;
}

const JobCard = ({ data, comparedJobs, setComparedJobs }: JobCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.companyHeader}>
        <button
          onClick={() => {
            setComparedJobs(comparedJobs.filter((job) => job.id !== data.id));
          }}
        >
          ×
        </button>
      </div>
      <p className={styles.row}>{data.company}</p>
      <p className={styles.row}>{data.title}</p>
      <p className={styles.row}>{data.field}</p>
      <p className={styles.row}>{data.type}</p>
      <p className={styles.row}>{data.salary}</p>
      <p className={styles.row}>{data.location}</p>
      <div className={styles.buttonContainer}>
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
