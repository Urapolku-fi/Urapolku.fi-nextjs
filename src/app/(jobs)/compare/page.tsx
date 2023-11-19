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

const enabledFields: Partial<keyof JobCardData>[] = [
  'company',
  'title',
  'field',
  'type',
  'salary',
  'location',
];
const fieldLabels: { [field in typeof enabledFields]: string } = {
  company: 'Company Name',
  title: 'Role (position)',
  field: 'Industry',
  type: 'Job Type | Work Type',
  salary: 'Annual or monthly salary',
  location: 'Location',
};
function getFieldsToHighlight(comparedJobs: JobCardData[]): Partial<keyof JobCardData>[] {
  if (comparedJobs.length === 0) {
    return [];
  }
  // TODO: Implement a unique diff algorithm for each field
  // In the future we could even have a plus and minus sign to signify a better or worse offer
  const fieldsToHighlight: Partial<keyof JobCardData>[] = [];
  for (const field of enabledFields) {
    const values = comparedJobs.map((job) => job[field]);
    if (!values.every((value) => value === values[0])) {
      fieldsToHighlight.push(field);
    }
  }
  return fieldsToHighlight;
}
export type VisibleFields = {
  [field in keyof JobCardData]: {
    visible: boolean;
    highlighted: boolean;
  };
};

import { useRouter } from 'next/navigation';
import JobSelectionDialog from './_components/jobSelectionDialog';
import { Fragment } from 'react';

interface PageProps {
  searchParams: {
    jobs?: string;
    viewDifferences?: string;
    addJob?: string;
  };
}

function Page({ searchParams }: PageProps) {
  const router = useRouter();
  const comparedJobs: JobCardData[] =
    searchParams.jobs
      ?.split(',')
      .map((jobId) => exampleData.find((job) => job.id === +jobId))
      .filter((job) => job != null) ?? [];
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
  const fieldsToHighlight = viewDifferences ? getFieldsToHighlight(comparedJobs) : [];
  const visibleFields = enabledFields.reduce((acc, field) => {
    acc[field] = {
      visible: true,
      highlighted: fieldsToHighlight.includes(field),
    };
    return acc;
  }, {} as VisibleFields);

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
                  {Object.entries(visibleFields).map(([field, { visible, highlighted }]) =>
                    visible ? (
                      <p
                        className={styles.row}
                        style={{ opacity: viewDifferences && !highlighted ? 0.5 : 1 }}
                        key={field}
                      >
                        {fieldLabels[field]}
                      </p>
                    ) : null,
                  )}
                </div>
              </div>
              {comparedJobs.map((job) => (
                <div className={styles.compareCard} key={job.id}>
                  <JobCard
                    data={job}
                    comparedJobs={comparedJobs}
                    setComparedJobs={setComparedJobs}
                    visibleFields={visibleFields}
                    viewDifferences={viewDifferences}
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
              {Object.entries(visibleFields).map(
                ([field, { visible, highlighted }]) =>
                  visible && (
                    <Fragment key={field}>
                      <div
                        className={styles.mobileCompareLabel}
                        style={{ opacity: viewDifferences && !highlighted ? 0.5 : 1 }}
                      >
                        {fieldLabels[field]}
                      </div>
                      <div
                        className={styles.mobileCompareRow}
                        style={{ opacity: viewDifferences && !highlighted ? 0.5 : 1 }}
                      >
                        {comparedJobs.map((job) => (
                          <div key={job.id}>{job[field]}</div>
                        ))}
                      </div>
                    </Fragment>
                  ),
              )}
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
