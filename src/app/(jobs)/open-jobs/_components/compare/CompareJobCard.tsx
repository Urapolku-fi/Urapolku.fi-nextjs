import Image from 'next/image';
import styles from './compareJobCard.module.css';
import Plus from '@/components/icons/Plus';
import CloseMenu from '@/components/icons/CloseMenu';

interface CompareJobCardProps {
  data?: {
    title: string;
    field: string;
    location: string;
    salary: string;
    area: string;
    type: string;
  };
  removeComparedJobById: (id: number) => void;
}

//TODO: use actual image for image
const CompareJobCard = ({ data, removeComparedJobById }: CompareJobCardProps) => {
  return (
    <div className={styles.card}>
      {data ? (
        <>
          <div className={styles.content}>
            <Image
              alt="Example image"
              src="/pictures/job-example-image.png"
              width={45}
              height={45}
            />
            <div>
              <h1>{data.title}</h1>
              <p>{data.type}</p>
              <p>{data.location}</p>
            </div>
            <button className={styles.closeButton}>
              <CloseMenu className={styles.closeIcon} />
            </button>
          </div>
        </>
      ) : (
        <Plus className={styles.plusIcon} />
      )}
    </div>
  );
};

export default CompareJobCard;
