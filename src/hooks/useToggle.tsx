import { useCallback, useState } from 'react';

export function useToggle(initialState = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(
    () => setState((previousState) => !previousState),
    []
  );

  return [state, toggleState];
}
