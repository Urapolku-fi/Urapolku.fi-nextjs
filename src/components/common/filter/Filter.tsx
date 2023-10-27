import styles from './filter.module.css';
import ButtonGroup from './ButtonGroup';
import LargeFilter from './LargeFilter';
import { createContext } from 'react';
import SingleOptionDropdown from './SingleOptionDropdown';
import MultipointRangeInput from './MultipointRangeInput';

export const FilterContext = createContext({});

interface FilterProps {
  filtersState: any;
  setFiltersState: any;
  clearFilters: () => void;
}

const Filter = ({ filtersState, setFiltersState, clearFilters }: FilterProps) => {
  return (
    <FilterContext.Provider
      value={{ filtersState: filtersState, setFiltersState: setFiltersState }}
    >
      <div className={styles.filterAndToolsContainer}>
        <div className={styles.filter}>
          <div className={styles.filterHeaderContainer}>
            <div className={styles.filterHeader}>Suodattimet</div>
            <button className={styles.filterClear} onClick={clearFilters}>
              Poista suodattimet
            </button>
          </div>
          <div className={styles.filtersFlexContainer}>
            <LargeFilter
              propertyName={'location'}
              label={'Location'}
              placeholder={'Search Location'}
            />
            <ButtonGroup propertyName={'jobType'} label={'Job Type'} />
            <ButtonGroup propertyName={'workType'} label={'Work Type'} />
            <LargeFilter
              propertyName={'industry'}
              label={'Industry'}
              placeholder={'Search Industry'}
            />
            <LargeFilter
              propertyName={'company'}
              label={'Company'}
              placeholder={'Search Company'}
            />
            <ButtonGroup propertyName={'language'} label={'Language'} />
            <LargeFilter propertyName={'role'} label={'Role'} placeholder={'Search Role'} />
            <MultipointRangeInput
              label="Salary"
              minValue={0}
              maxValue={15000}
              marks={[3000, 6000, 9000, 12000]}
              defaultValues={[3500, 12000]}
            />
            <SingleOptionDropdown
              label={'Education'}
              options={filtersState.education}
              childComponent={
                <div className={styles.largeFilterOpener}>
                  <img
                    className={styles.expandMoreArrow}
                    alt="show more"
                    src={'/pictures/expand-arrow.png'}
                  ></img>
                  <div className={styles.largeFilterOpenerText}>Choose Education</div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default Filter;
