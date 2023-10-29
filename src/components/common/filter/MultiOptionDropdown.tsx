// TODO: replace with a core component

import styles from './multiOptionDropdown.module.css';

import { useState } from 'react';
import Checkbox from '../../core/Checkbox/Checkbox';
import ToggleButton from './ToggleButton';
import FilterLabel from './FilterLabel';
import { default as cm } from '@/lib/classMerge';

const MultiOptionDropdown = ({ options, childComponent, values, setValues }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (index: any) => {
    setValues(values.map((e: any, i: number) => (i === index ? !e : e)));
    /*
    what is this???? causes flickering but dunno what it does so...
    toggleDropdown();
    setTimeout(() => {
      setShowDropdown(true);
    }, 1);
    */
  };

  const handleTogglebuttonClick = (index: any) => {
    setValues(values.map((e: any, i: number) => (i === index ? !e : e)));
  };

  const handleClearClick = () => {
    setValues(Array(values.length).fill(false));
    toggleDropdown();
  };

  return (
    <>
      <button className={styles.openButton} onClick={toggleDropdown}>
        {childComponent}
      </button>
      <div className={cm(styles.dropdownContainer, showDropdown ? '' : styles.hide)}>
        <div className={styles.multiOptionDropdown}>
          <div className={styles.dropdownFlexContainer}>
            {options.map((item: any) =>
              typeof item === 'string' ? (
                <Checkbox
                  key={item}
                  text={item}
                  checked={
                    values[
                      options
                        .filter((e: any) => typeof e === 'string')
                        .findIndex((e: any) => e === item)
                    ]
                  }
                  toggle={() =>
                    handleOptionClick(
                      options
                        .filter((e: any) => typeof e === 'string')
                        .findIndex((e: any) => e === item),
                    )
                  }
                />
              ) : (
                <div className={styles.filterLabelContainer} key={item[0]}>
                  <FilterLabel text={item[0]} />
                </div>
              ),
            )}
          </div>
          <div className={styles.whitespaceUnderDropdownControls} />
        </div>
        <div className={styles.stickyDropdownControls}>
          <div className={styles.dropdownControlsContainer}>
            <ToggleButton text="clear" forDropdownControls onClick={handleClearClick} />
            <ToggleButton
              text="apply"
              selected={true}
              forDropdownControls
              onClick={toggleDropdown}
            />
          </div>
        </div>
      </div>
      <div className={styles.multiOptionDropdownTogglebuttonContainer}>
        {options
          .filter((e: any) => typeof e === 'string')
          .map((e: any, i: any) => [e, i])
          .filter((e: any) => values[e[1]])
          .map((value: any) => (
            <ToggleButton
              text={value[0]}
              selected={true}
              onClick={() => handleTogglebuttonClick(value[1])}
              key={value[0]}
            />
          ))}
      </div>
    </>
  );
};

export default MultiOptionDropdown;
