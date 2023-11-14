'use client';
import styles from './page.module.css';
import JobCard, { JobCardData } from './_components/JobCard';
import { Button } from '@/components/core';

const exampleData: JobCardData[] = [
  {
    id: 1,
    company: 'Hospital One',
    title: 'Nurse',
    area: 'Welfare Area',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€35,000 annually',
    location: 'Espoo',
  },
  {
    id: 2,
    company: 'Hospital Two',
    title: 'Nurse',
    area: 'Welfare Area 2',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€30,000 annually',
    location: 'Espoo',
  },
  {
    id: 3,
    company: 'Hospital Three',
    title: 'Nurse',
    area: 'Welfare Area 3',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€25,000 annually',
    location: 'Espoo',
  },
  {
    id: 4,
    company: 'Hospital Four',
    title: 'Nurse',
    area: 'Welfare Area 4',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€20,000 annually',
    location: 'Espoo',
  },
];

import { useRouter } from 'next/navigation';

function Page({ searchParams }) {
  const router = useRouter();
  const comparedJobs =
    searchParams.jobs
      ?.split(',')
      .map((jobId) => exampleData.find((job) => job.id === +jobId))
      .filter((job) => job) ?? [];
  const setComparedJobs = (newComparedJobs: JobCardData[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('jobs', newComparedJobs.map((job) => job.id).join(','));
    if (newComparedJobs.length === 0) {
      newSearchParams.delete('jobs');
    }
    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <main className={styles.mainContainer}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Compare Offers</h1>
      </section>
      <section className={styles.compare}>
        <div className={styles.compareControls}>
          <label className={styles.viewDifferences}>
            <input type="checkbox" />
            <span>View Differences</span>
          </label>
          <div className={styles.compareLabels}>
            <p className={styles.row}>Company Name</p>
            <p className={styles.row}>Role (position)</p>
            <p className={styles.row}>Industry</p>
            <p className={styles.row}>Job Type | Work Type</p>
            <p className={styles.row}>Annual or monthly salary</p>
            <p className={styles.row}>Location</p>
          </div>
        </div>
        {comparedJobs.map((job) => (
          <div className={styles.compareCard} key={job.id}>
            <JobCard data={job} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
          </div>
        ))}
        <div className={styles.compareAdd}>
          <Button
            onClick={() => {
              const newJob = exampleData.find((job) => !comparedJobs.includes(job));
              if (!newJob) return;
              setComparedJobs([...comparedJobs, newJob]);
            }}
          >
            <span>Add Job</span>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Page;
