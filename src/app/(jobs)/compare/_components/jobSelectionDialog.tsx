import styles from './jobSelectionDialog.module.css';
import { Button } from '@/components/core';
import { JobCardData } from './JobCard';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

interface JobCardProps {
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
  availableJobs: JobCardData[];
  comparedJobs: JobCardData[];
  setComparedJobs: (newComparedJobs: JobCardData[]) => void;
}

const JobSelectionDialog = ({
  isOpen,
  setIsOpen,
  availableJobs,
  comparedJobs,
  setComparedJobs,
}: JobCardProps) => {
  const ref = useRef<HTMLDialogElement>(null);
  const unselectedAvailableJobs = useMemo(
    () =>
      availableJobs.filter((job) => !comparedJobs.some((comparedJob) => comparedJob.id === job.id)),
    [availableJobs, comparedJobs],
  );
  const availableCompanies = Array.from(new Set(unselectedAvailableJobs.map((job) => job.company)));
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [availableJobsAtTheCompany, setAvailableJobsAtTheCompany] = useState<JobCardData[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add('modal-open'); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);
  useEffect(() => {
    if (!ref.current) return;
    const dialog = ref.current;
    dialog.addEventListener('close', () => {
      if (isOpen) {
        setIsOpen(false);
      }
    });
  }, [ref, setIsOpen, isOpen]);
  useEffect(() => {
    if (selectedCompany != null) {
      setSelectedJobId(null);
      setAvailableJobsAtTheCompany(
        unselectedAvailableJobs.filter((job) => job.company === selectedCompany),
      );
    } else {
      setAvailableJobsAtTheCompany([]);
    }
  }, [selectedCompany, unselectedAvailableJobs]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      className={styles.container}
      ref={ref}
      onClick={(event) => {
        if (!ref.current) return;
        if (event.target !== ref.current) return;
        const dialog = ref.current;
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          setIsOpen(false);
        }
      }}
    >
      <div className={styles.inner}>
        <h1>Select jobs for comparison</h1>
        <label>
          Company
          <select
            value={selectedCompany || ''}
            onChange={(event) => {
              setSelectedCompany(event.target.value);
            }}
          >
            <option disabled value="">
              Select a company
            </option>
            {availableCompanies.map((company) => (
              <option value={company} key={company}>
                {company}
              </option>
            ))}
          </select>
        </label>
        <label>
          Job Title
          <select
            value={selectedJobId || ''}
            onChange={(event) => {
              setSelectedJobId(+event.target.value);
            }}
          >
            <option disabled value="">
              Select a title
            </option>
            {availableJobsAtTheCompany.map((job) => (
              <option value={job.id} key={job.id}>
                {job.title}
              </option>
            ))}
          </select>
        </label>
        <div className={styles.actions}>
          <Button
            onClick={() => {
              if (selectedJobId == null) return;
              const job = availableJobs.find((job) => job.id === selectedJobId);
              if (!job) return;
              setComparedJobs([...comparedJobs, job]);
              setSelectedJobId(null);
              setSelectedCompany(null);
            }}
            disabled={selectedJobId == null}
          >
            Add to comparison
          </Button>
          <div className={styles.spacer} />
          <Link href="javascript:alert('todo!');">Add from saved jobs</Link>
        </div>
        <hr />
        <div className={styles.jobList}>
          {comparedJobs.map((job) => (
            <div className={styles.job} key={job.id}>
              <div className={styles.details}>
                <p>{job.company}</p>
                <p>{job.title}</p>
              </div>
              <Button
                onClick={() => {
                  setComparedJobs(comparedJobs.filter((j) => j.id !== job.id));
                }}
              >
                Remove from comparison
              </Button>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default JobSelectionDialog;
