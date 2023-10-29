//TODO: move to core components

import styles from './toggleButton.module.css';
import { default as cm } from '@/lib/classMerge';

const ToggleButton = ({
  text,
  selected,
  onClick = () => {},
  forDropdownControls = false,
  forCompareBox = false,
}: any) => {
  return (
    <>
      {selected ? (
        <button
          className={
            forDropdownControls
              ? cm(styles.toggleButtonToggled, styles.forDropdownControls)
              : forCompareBox
              ? cm(styles.toggleButtonToggled, styles.forCompareBox)
              : styles.toggleButtonToggled
          }
          onClick={onClick}
        >
          <div className={styles.toggleButtonInnerTextToggled}>{text}</div>
        </button>
      ) : (
        <button
          className={
            forDropdownControls
              ? cm(styles.toggleButton, styles.forDropdownControls)
              : forCompareBox
              ? cm(styles.toggleButton, styles.forCompareBox)
              : styles.toggleButton
          }
          onClick={onClick}
        >
          <div className={styles.toggleButtonInnerText}>{text}</div>
        </button>
      )}
    </>
  );
};

export default ToggleButton;
