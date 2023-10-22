//TODO: move to core components

import ToggleButton from './ToggleButton';
import { FilterContext } from './Filter';
import { useContext } from 'react';
import FilterLabel from './FilterLabel';

const ButtonGroup = ({
  propertyName,
  label = '',
  filtersStateProp = false,
  setFiltersStateProp = false,
  mobile = false,
}: any) => {
  let { filtersState, setFiltersState }: any = useContext(FilterContext);

  if (!filtersState) {
    filtersState = filtersStateProp;
    setFiltersState = setFiltersStateProp;
  }

  return (
    <>
      {label && <FilterLabel text={label} />}
      <div className={`toggle-buttons-flex-container ${mobile ? 'mobile' : ''}`}>
        {filtersState[propertyName].map((item: any, i: number) => (
          <ToggleButton
            key={i}
            text={item[0]}
            selected={item[1]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                [propertyName]: filtersState[propertyName].map((e: any, index: number) =>
                  index === i ? [e[0], !e[1]] : [e[0], e[1]],
                ),
              });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
