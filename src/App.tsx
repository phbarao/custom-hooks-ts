import { useToggle } from './hooks/useToggle';

export default function App() {
  const [state, toggleState] = useToggle(true);

  return (
    <div>
      <h1>{state.toString().toUpperCase()}</h1>

      <button onClick={() => toggleState()}>Toggle</button>
      <button onClick={() => toggleState(true)}>True</button>
      <button onClick={() => toggleState(false)}>False</button>
    </div>
  );
}
