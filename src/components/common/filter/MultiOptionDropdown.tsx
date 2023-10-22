// TODO: replace with a core component

import { useState } from 'react';
import './multiOptionDropdown.css';
import CheckBox from './CheckBox';
import ToggleButton from './ToggleButton';
import FilterLabel from './FilterLabel';

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
      <span onClick={toggleDropdown}>{childComponent}</span>
      <div className={`dropdown-container${showDropdown ? '' : ' hide'}`}>
        <div className={'multi-option-dropdown'}>
          <div className="dropdown-flex-container">
            {options.map((item: any) =>
              typeof item === 'string' ? (
                <CheckBox
                  key={item}
                  text={item}
                  toggled={
                    values[
                      options
                        .filter((e: any) => typeof e === 'string')
                        .findIndex((e: any) => e === item)
                    ]
                  }
                  onClick={() =>
                    handleOptionClick(
                      options
                        .filter((e: any) => typeof e === 'string')
                        .findIndex((e: any) => e === item),
                    )
                  }
                />
              ) : (
                <div className="filter-label-container" key={item[0]}>
                  <FilterLabel text={item[0]} />
                </div>
              ),
            )}
          </div>
          <div className="whitespace-under-dropdown-controls" />
        </div>
        <div className={'sticky-dropdown-controls'}>
          <div className="dropdown-controls-container">
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
      <div className="multi-option-dropdown-togglebutton-container">
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
