import styles from './jobCard.module.css';
import { Button } from '@/components/core';
import Bookmark from '@/components/icons/Bookmark';
import { VisibleFields } from '../page';

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
  visibleFields: VisibleFields;
  viewDifferences: boolean;
}

const JobCard = ({
  data,
  comparedJobs,
  setComparedJobs,
  visibleFields,
  viewDifferences,
}: JobCardProps) => {
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
      {Object.entries(visibleFields).map(
        ([field, { visible, highlighted }]) =>
          visible && (
            <p
              className={styles.row}
              style={{ opacity: viewDifferences && !highlighted ? 0.5 : 1 }}
              key={field}
            >
              {data[field]}
            </p>
          ),
      )}
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
