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
import JobSelectionDialog from './_components/jobSelectionDialog';

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
  // TODO: Implement viewDifferences
  const viewDifferences = searchParams.viewDifferences === 'true';
  const setViewDifferences = (newViewDifferences: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (newViewDifferences) {
      newSearchParams.set('viewDifferences', 'true');
    } else {
      newSearchParams.delete('viewDifferences');
    }
    router.push(`?${newSearchParams.toString()}`);
  };
  const isAddJobDialogOpen = searchParams.addJob === 'true';
  const setIsAddJobDialogOpen = (newIsAddJobDialogOpen: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (newIsAddJobDialogOpen) {
      newSearchParams.set('addJob', 'true');
    } else {
      newSearchParams.delete('addJob');
    }
    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <h1 className={styles.heading}>Compare Offers</h1>
        </section>
        {comparedJobs.length === 0 ? (
          <section className={styles.comparisonEmpty}>
            {AddButton(() => {
              setIsAddJobDialogOpen(true);
            })}
          </section>
        ) : (
          <>
            <section className={styles.compare}>
              <div className={styles.compareControls}>
                {comparedJobs.length > 1 && (
                  <label className={styles.viewDifferences}>
                    <input
                      type="checkbox"
                      checked={viewDifferences}
                      onChange={() => {
                        setViewDifferences(!viewDifferences);
                      }}
                    />
                    <span>View Differences</span>
                  </label>
                )}
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
                  <JobCard
                    data={job}
                    comparedJobs={comparedJobs}
                    setComparedJobs={setComparedJobs}
                  />
                </div>
              ))}
              {exampleData.find((job) => !comparedJobs.includes(job)) &&
                AddButton(() => {
                  setIsAddJobDialogOpen(true);
                })}
            </section>
            {comparedJobs.length > 1 && (
              <label className={styles.viewDifferencesMobile}>
                <input
                  type="checkbox"
                  checked={viewDifferences}
                  onChange={() => {
                    setViewDifferences(!viewDifferences);
                  }}
                />
                <span>View Differences</span>
              </label>
            )}
            <section className={styles.comparisonMobile}>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div className={styles.companyHeader} key={job.id}>
                    <button
                      onClick={() => {
                        setComparedJobs(comparedJobs.filter((j) => j.id !== job.id));
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setIsAddJobDialogOpen(true);
                  }}
                  className={styles.addJob}
                >
                  +
                </button>
              </div>
              <div className={styles.mobileCompareLabel}>Company</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.company}</div>
                ))}
              </div>
              <div className={styles.mobileCompareLabel}>Title</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.title}</div>
                ))}
              </div>
              <div className={styles.mobileCompareLabel}>Location</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.location}</div>
                ))}
              </div>

              <div className={styles.mobileCompareLabel}>Salary</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.salary}</div>
                ))}
              </div>
              <div className={styles.mobileCompareLabel}>Industry</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.field}</div>
                ))}
              </div>
              <div className={styles.mobileCompareLabel}>Job Type</div>
              <div className={styles.mobileCompareRow}>
                {comparedJobs.map((job) => (
                  <div key={job.id}>{job.type}</div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
      <JobSelectionDialog
        isOpen={isAddJobDialogOpen}
        setIsOpen={setIsAddJobDialogOpen}
        availableJobs={exampleData}
        comparedJobs={comparedJobs}
        setComparedJobs={setComparedJobs}
      />
    </>
  );
}

function AddButton(onClick: (() => void) | undefined) {
  return (
    <div className={styles.compareAdd}>
      <Button onClick={onClick}>
        <span>Add Job</span>
      </Button>
    </div>
  );
}

export default Page;
