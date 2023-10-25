import { useCallback, useState } from 'react';

export interface IUseCheckBox {
  checked: boolean;
  toggle: () => void;
}

/**
 * A custom hook for managing the state of a checkbox.
 * @returns An object containing the current checked state and a toggle function to update it.
 */
export default function useCheckbox() {
  const [checked, setChecked] = useState(false);
  const toggle = useCallback(() => setChecked((checked) => !checked), []);

  return { checked, toggle };
}
