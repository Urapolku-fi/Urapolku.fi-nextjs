// TODO: replace me with a core component 'dropdown'
import { useEffect, useState } from 'react';
import './singleOptionDropdown.css';
import FilterLabel from '@/components/common/filter/FilterLabel';

// options is an array of the options, they must be unique since they're being used as values
// example: [
//   "€1,000 - €2,000",
//   "€2,000 - €3,000",
//   "€3,000 - €4,000",
//   "€4,000 - €5,000",
//   "€5,000 - €10,000",
//   "€10,000 +",
// ]
// childComponent is the component that should open the dropdown

const SingleOptionDropdown = ({ options, childComponent, forSort, label }: any) => {
  const [value, setValue] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    setShowDropdown(false);
  }, [value]);

  return (
    <div>
      {/* //TODO: fix the styling on these buttons */}
      {label && <FilterLabel text={label} />}
      <button onClick={toggleDropdown}>{childComponent}</button>
      <div className={`education-list ${!showDropdown ? 'hide' : ''} ${forSort ? 'for-sort' : ''}`}>
        {options.map((item: any) => (
          <button
            // value={item}
            className={item !== value ? 'option' : 'option selected-option'}
            onClick={() => {
              handleOptionClick(item);
            }}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleOptionDropdown;
