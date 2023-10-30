'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { IFilter, defaultFiltersState } from './filter';
import SearchBar from '../../../components/common/searchBar/SeatchBar';
import useSearchBar from '@/components/common/searchBar/useSearchBar';
import JobCard, { JobCardData } from './_components/JobCard';
import Filter from '@/components/common/filter/Filter';
import { Button, Dropdown, useDropdown } from '@/components/core';
import JobToolsPanel from '@/components/common/filter/JobToolsPanel';
import CompareBox from './_components/compare/CompareBox';
import MobileFilters from '@/components/common/filter/MobileFilter';
import MobileSearchBar from '@/components/common/searchBar/MobileSearchBar';
import ChevronDown from '@/components/icons/ChevronDown';

function Page() {
  const [comparedJobs, setComparedJobs] = useState<JobCardData[]>([]);
  const [filtersState, setFiltersState] = useState<IFilter>(defaultFiltersState);
  const searchBar = useSearchBar();
  const sortBy = useDropdown();

  useEffect(() => {
    if (comparedJobs.length > 4) {
      setComparedJobs([...comparedJobs].slice(0, 4));
    }
  }, [comparedJobs]);

  const clearFilters = () => {
    setFiltersState(defaultFiltersState);
  };

  const clearComparables = () => {
    setComparedJobs([]);
  };

  const removeComparedJobById = (id: number) => {
    setComparedJobs(comparedJobs.filter((e) => e.id !== id));
  };

  const exampleData = {
    title: 'Nurse',
    area: 'Welfare Area',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€35,000 annually',
    location: 'Espoo',
  };

  const mocCards = Array.from(Array(20).keys()).map((e, i) => (
    <JobCard
      key={i}
      comparedJobs={comparedJobs}
      setComparedJobs={setComparedJobs}
      data={{ ...exampleData, id: i }}
    />
  ));

  return (
    <main className={styles.mainContainer}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Looking for a job?</h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        {/* //TODO: add real options */}
        <div className={styles.searchBar}>
          <SearchBar experienceDropdownOptions={['A', 'B', 'C']} {...searchBar} />
        </div>
        <div className={styles.mobileSearchBar}>
          <MobileSearchBar />
        </div>
      </section>
      <section className={styles.infoSortByContainer}>
        <span></span>
        <p>Showing 500 jobs in Health Care</p>
        <div>
          <Dropdown options={['Date', 'Relevance']} {...sortBy} />
        </div>
      </section>
      <section className={styles.infoSortByContainerMobile}>
        <MobileFilters
          filtersState={filtersState}
          setFiltersState={setFiltersState}
          categoryNames={[
            'Location',
            'Job Type',
            'Work Type',
            'Industry',
            'Company',
            'Language',
            'Role',
            'Salary',
            'Education',
          ]}
        />
        <Button className={styles.compareButton} variant="skeleton">
          Compare
          <ChevronDown className={styles.compareIcon} />
        </Button>
      </section>
      <section className={styles.filterCardsContainer}>
        <div className={styles.filter}>
          <Filter
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />
          <JobToolsPanel />
        </div>
        <div className={styles.jobCardsContainer}>{mocCards}</div>
      </section>
      <CompareBox
        comparables={comparedJobs}
        clearComparables={clearComparables}
        hidden={comparedJobs.length === 0}
        removeComparedJobById={removeComparedJobById}
      />
    </main>
  );
}

export default Page;
