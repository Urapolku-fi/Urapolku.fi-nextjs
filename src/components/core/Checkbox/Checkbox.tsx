import { classMerge as cm } from '@/lib/classMerge';
import styles from './checkbox.module.css';

export interface CheckBoxProps {
  checked: boolean;
  text: string;
  onClick?: () => void;
}

/**
 * Checkbox component.
 * @param checked - Whether the checkbox is checked or not.
 * @param toggle - Function to toggle the checkbox.
 * @returns A checkbox component.
 */
export default function Checkbox({ checked, text, onClick = () => {} }: CheckBoxProps) {
  return (
    <button
      className={styles.container}
      onClick={() => {
        onClick();
      }}
    >
      <p className={cm(styles.option, checked ? styles.selected : '')}>{text}</p>
    </button>
  );
}
