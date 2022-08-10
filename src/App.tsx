import { useToggle } from './hooks/useToggle';

export default function App() {
  const [state, toggleState] = useToggle(false);

  return (
    <div>
      <h1>{state.toString().toUpperCase()}</h1>

      <button onClick={toggleState}>Toggle</button>
      {/* <button onClick={() => toggleValue(true)}>True</button> */}
      {/* <button onClick={() => toggleValue(false)}>False</button> */}
    </div>
  );
}
