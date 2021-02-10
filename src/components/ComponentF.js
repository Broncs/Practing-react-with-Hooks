import { useContext } from 'react';
import { GlobalContext } from './useContext';

const ComponentF = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      Coomponent F Counter {state}
      <button onClick={() => dispatch('INCREMENT')}> increment</button>
      <button onClick={() => dispatch('DECREMENT')}>decrement</button>
      <button onClick={() => dispatch('RESET')}>reset</button>
    </div>
  );
};

export default ComponentF;
