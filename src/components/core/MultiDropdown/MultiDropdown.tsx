import classes from './multidropdown.module.css';
import ChevronDown from '@/components/icons/ChevronDown';
import { classMerge as cm } from '@/lib/classMerge';
import { Button } from '@/components/core';

interface MultiDropdownProps {
  sets: {
    title: string;
    values: string[];
  }[];
  title: string;
  selected: string[];
  setSelected: (selected: string[]) => void;
  clearSelected: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleIsOpen: () => void;
}

function MultiDropdown({
  sets,
  title,
  selected,
  setSelected,
  clearSelected,
  isOpen,
  setIsOpen,
  toggleIsOpen,
}: MultiDropdownProps) {
  function handleToggle() {
    toggleIsOpen();
  }

  function handleSelect(set: number, value: number) {
    const newSelected = [...selected];
    if (newSelected.includes(`${set}-${value}`)) {
      newSelected.splice(newSelected.indexOf(`${set}-${value}`), 1);
    } else {
      newSelected.push(`${set}-${value}`);
    }

    setSelected(newSelected);
  }

  function handleApply() {
    setIsOpen(false);
  }

  return (
    <>
      <button className={classes.opener} onClick={handleToggle}>
        {title} <ChevronDown />
      </button>
      <div className={isOpen ? cm(classes.modal, classes.top) : classes.hidden}>
        {sets.map((set, i) => (
          <div key={i} className={classes.set}>
            <p className={classes.title}>{set.title}</p>
            <ul className={cm(classes.options)}>
              {set.values.map((item, j) => (
                <button key={j} onClick={() => handleSelect(i, j)}>
                  <li
                    className={cm(
                      classes.option,
                      selected.includes(`${i}-${j}`) ? classes.selected : '',
                    )}
                  >
                    <span>{item}</span>
                  </li>
                </button>
              ))}
            </ul>
          </div>
        ))}
        <div className={classes.buttonContainer}>
          <Button onClick={handleApply}>Apply</Button>
          <Button outline onClick={clearSelected}>
            Clear
          </Button>
        </div>
      </div>
    </>
  );
}

export default MultiDropdown;
