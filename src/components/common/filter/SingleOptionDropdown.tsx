// TODO: replace me with a core component 'dropdown'
import styles from './singleOptionDropdown.module.css';

import { useEffect, useState } from 'react';
import FilterLabel from '@/components/common/filter/FilterLabel';
import { default as cm } from '@/lib/classMerge';

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
      <div
        className={cm(
          styles.educationList,
          !showDropdown ? styles.hide : '',
          forSort ? styles.forSort : '',
        )}
      >
        {options.map((item: any) => (
          <button
            // value={item}
            className={cm(styles.option, item !== value ? '' : styles.selectedOption)}
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
