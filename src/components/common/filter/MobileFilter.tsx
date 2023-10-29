import styles from './mobileFilter.module.css';

import { useEffect, useState } from 'react';
import ToggleButton from './ToggleButton';
import ButtonGroup from './ButtonGroup';
import MultipointRangeInput from './MultipointRangeInput';
import { Button } from '@/components/core';
import { default as cm } from '@/lib/classMerge';

const FilterListItem = ({ text, active }: any) => {
  return (
    <div className="mobile-filter-list-value-item">
      <div className={`mobile-filters-ellipse ${active ? 'active' : ''}`} />
      <p className={`mobile-filters-value ${active ? 'active' : ''}`}>{text}</p>
    </div>
  );
};

const ListItems = ({ activeFilter, filtersState, setFiltersState }: any) => {
  // ugly but does the job, using ternary operator for rendering these would look way too messy
  switch (activeFilter) {
    case 'jobtype':
      return (
        <ButtonGroup
          propertyName={'jobType'}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );
    case 'worktype':
      return (
        <ButtonGroup
          propertyName={'workType'}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );
    case 'language':
      return (
        <ButtonGroup
          propertyName={'language'}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );

    case 'salary':
      return (
        <MultipointRangeInput
          minValue={0}
          maxValue={15000}
          marks={[3000, 6000, 9000, 12000]}
          defaultValues={[3500, 12000]}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      );

    case 'education':
      return filtersState['education'].map((fil: any, i: number) => (
        <FilterListItem key={i} text={fil} />
      ));
    default:
      return filtersState[
        Object.keys(filtersState).filter(
          (filter: any) => filter.toLowerCase() === activeFilter && filter,
        ) as any
      ][0].map((fil: any, i: number) => <FilterListItem key={i} text={fil} />);
  }
};

interface MobileFiltersProps {
  filtersState: any;
  setFiltersState: any;
  categoryNames: any;
}

const MobileFilters = ({ filtersState, setFiltersState, categoryNames }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState(Object.keys(filtersState)[0].toLowerCase());

  useEffect(() => {
    if (open) document.body.classList.add(styles.stopScrolling);
    else document.body.classList.remove(styles.stopScrolling);
  }, [open]);

  const changeActiveCategory = (e: any) => {
    const cleanId = e.target.id.replace(' ', '').toLowerCase();
    setActiveFilter(cleanId);
  };

  return (
    <div>
      <Button
        variant="skeleton"
        className={styles.textJobFilterToggle}
        onClick={() => setOpen(true)}
      >
        Filters
      </Button>
      {open && (
        <div className={styles.mobileFilters}>
          {/* //TODO: restyle this button */}
          <button
            className={styles.mobileFiltersThumbWrapper} //this exists because the part is too small to grab otherwise
            onClick={() => setOpen(false)}
          >
            <div className={styles.mobileFiltersThumb}></div>
          </button>

          <div className={styles.mobileFiltersHeader}>
            <p>Filters</p>
            <p>Clear all</p>
          </div>
          <div className={styles.mobileFiltersContentWrapper}>
            <div className={styles.mobileFiltersNames}>
              {categoryNames.map((filterName: any) => (
                //TODO: restyle this button
                //TODO: css modules might cause problems here
                <button
                  onClick={changeActiveCategory}
                  className={`${styles.mobileFiltersName}} ${
                    filterName.replace(' ', '').toLowerCase() === activeFilter ? 'active' : ''
                  }`}
                  id={filterName}
                  key={filterName}
                >
                  {filterName}
                </button>
              ))}
            </div>
            <div className={styles.mobileFiltersValues}>
              <ListItems
                activeFilter={activeFilter}
                filtersState={filtersState}
                setFiltersState={setFiltersState}
              />
            </div>
          </div>
          <div className={cm(styles.dropdownControlsContainer, styles.mobile)}>
            <ToggleButton text="clear" selected={false} forDropdownControls />
            <ToggleButton text="apply" selected={true} forDropdownControls />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
