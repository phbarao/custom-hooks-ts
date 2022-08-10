import { useCallback, useState } from 'react';

export function useToggle(
  initialState: boolean
): [boolean, (value?: boolean) => void] {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(
    (value?: boolean) =>
      setState((previousState) =>
        typeof value === 'boolean' ? value : !previousState
      ),
    []
  );

  return [state, toggleState];
}
