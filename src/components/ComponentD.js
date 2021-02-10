import { useContext } from 'react';
import { GlobalContext } from './useContext';

const ComponentD = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      Coomponent D Counter {state}
      <button onClick={() => dispatch('INCREMENT')}> increment</button>
      <button onClick={() => dispatch('DECREMENT')}>decrement</button>
      <button onClick={() => dispatch('RESET')}>reset</button>
    </div>
  );
};

export default ComponentD;
