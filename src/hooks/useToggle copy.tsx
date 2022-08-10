import { useState } from 'react';

export function useToggle(
  initialValue: boolean
): [boolean, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  function toggleValue(value: boolean) {
    setValue(!value);
  }

  return [value, toggleValue];
}
