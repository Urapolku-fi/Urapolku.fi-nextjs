//TODO: make this into its own component

import './largeFilter.css';
import ToggleButton from './ToggleButton';
import MultiOptionDropdown from './MultiOptionDropdown';
import { FilterContext } from './Filter';
import { useContext } from 'react';
import FilterLabel from './FilterLabel';

const LargeFilter = ({ propertyName, label, placeholder }: any) => {
  const { filtersState, setFiltersState }: any = useContext(FilterContext);

  return (
    <MultiOptionDropdown
      options={filtersState[propertyName][0]}
      values={filtersState[propertyName][1]}
      setValues={(newValues: any) => {
        setFiltersState({
          ...filtersState,
          [propertyName]: [filtersState[propertyName][0], newValues],
        });
      }}
      childComponent={
        <>
          {label && <FilterLabel text={label} />}
          <div className="large-filter-opener">
            <img className="expand-more-arrow" src={'/pictures/expand-arrow.png'}></img>
            <div className="large-filter-opener-text">{placeholder || label || 'Placeholder'}</div>
            {/* //TODO: change this to actual state */}
            {false && <ToggleButton selected={false} text="Text" />}
          </div>
        </>
      }
    />
  );
};

export default LargeFilter;
