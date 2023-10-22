import classes from './dropdown.module.css';
import { classMerge as cm } from '@/lib/classMerge';
import ChevronDown from '@/components/icons/ChevronDown';

interface DropdownProps {
  options: string[];
  title?: string;
  closeAutomatically?: boolean;
  isOpen: boolean;
  toggle: () => void;
  value: string;
  setValue: (value: string) => void;
}

/**
 * A dropdown component that allows the user to select an option from a list of options.
 * Note that this component does not support multiples of the same option.
 * To obtain isOpen, toggle, value and setValue, use the **useDropdown** hook.
 *
 * @example
 * const { isOpen, toggle, value, setValue } = useDropdown();
 * <Dropdown
 *  options={['Option 1', 'Option 2', 'Option 3']}
 *  title='Dropdown'
 *  isOpen={isOpen}
 *  toggle={toggle}
 *  value={value}
 *  setValue={setValue}
 * />
 */
function Dropdown({
  options,
  title = 'Dropdown',
  closeAutomatically = true,
  isOpen,
  toggle,
  value,
  setValue,
}: DropdownProps) {
  function onSelect(item: string) {
    setValue(item);
    if (closeAutomatically) {
      toggle();
    }
  }

  return (
    <>
      <button className={classes.opener} onClick={toggle}>
        {title}
        <ChevronDown />
      </button>
      <div className={isOpen ? cm(classes.modal, classes.top) : classes.hidden}>
        {options.map((item, index) => (
          <button
            key={index}
            className={item == value ? cm(classes.selected, classes.option) : classes.option}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Dropdown;
