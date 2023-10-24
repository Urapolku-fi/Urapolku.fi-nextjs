'use client';

import './page.css';
import { useEffect, useState } from 'react';
import { defaultFiltersState } from './filter';
import SearchBar from '../../../components/common/searchBar/SeatchBar';
import MobileFilters from '@/components/common/filter/MobileFilter';
import SingleOptionDropdown from '@/components/common/filter/SingleOptionDropdown';
import Filter from '@/components/common/filter/Filter';
import JobCard from './_components/JobCard';
import AdCard from './_components/AdCard';
import Footer from '@/components/common/footer/Footer';
import CompareBox from './_components/compare/CompareBox';
import useSearchBar from '@/components/common/searchBar/useSearchBar';

function Page() {
  const [comparedJobs, setComparedJobs] = useState([]);
  const [filtersState, setFiltersState] = useState(defaultFiltersState);
  const searchBar = useSearchBar();

  useEffect(() => {
    if (comparedJobs.length > 4) {
      setComparedJobs([...comparedJobs].slice(1, 4));
    }
  }, [comparedJobs]);

  const clearFilters = () => {
    setFiltersState(defaultFiltersState);
  };

  const clearComparables = () => {
    setComparedJobs([]);
  };

  const removeComparedJobById = (id: any) => {
    setComparedJobs(comparedJobs.filter((e: any) => e.id !== id));
  };

  const exampleData = {
    title: 'Nurse',
    area: 'Welfare Area',
    field: 'Health Care',
    type: 'Full time | On Site',
    salary: '€35,000 annually',
    location: 'Espoo',
  };

  return (
    <div className="Browse-wrapper">
      <div className="hero-stack">
        <div className="content">
          <div className="header-looking-for-job">Etsitkö työpaikkaa?</div>
          <div className="paragraph-wrapper">
            <div className="text-ipsum">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <SearchBar {...searchBar} experienceDropdownOptions={['A', 'B', 'C', 'D']} />
      </div>
      <div className="job-count-and-sort-container">
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
        <div className="text-job-count">Näytetään 500 työtä alalla terveydenhuolto</div>
        <SingleOptionDropdown
          options={['päiväys', 'osuvuus']}
          forSort
          childComponent={
            <div className="button-sort">
              Järjestä{' '}
              <img
                className="sort-dropdown-arrow"
                alt="show more"
                src={'/pictures/expand-arrow.png'}
              />
            </div>
          }
        />
      </div>
      <div className="job-and-filter-container">
        <Filter
          filtersState={filtersState}
          setFiltersState={setFiltersState}
          clearFilters={clearFilters}
        />
        <div className="job-container">
          <JobCard
            data={{ ...exampleData, id: 1 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 2 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <AdCard text="Näillä kymmenellä alalla on eniten töitä tällä hetkellä." />
          <JobCard
            data={{ ...exampleData, id: 3 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 4 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 5 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
        </div>
      </div>
      <Footer />

      <CompareBox
        comparables={comparedJobs}
        clearComparables={clearComparables}
        hidden={comparedJobs.length === 0}
        removeComparedJobById={removeComparedJobById}
      />
    </div>
  );
}

export default Page;
