import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      throw new Error('error in reduce');
  }
};

const CounterTwoReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [countTwo, disptachTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>FirstCounter - {state}</h1>
        <button onClick={() => dispatch('INCREMENT')}>increment</button>
        <button onClick={() => dispatch('DECREMENT')}>decrement</button>
        <br />
        <button onClick={() => dispatch('RESET')}>reset</button>
      </div>

      <div>
        <h1>secondCounter - {countTwo}</h1>
        <button onClick={() => disptachTwo('INCREMENT')}>increment</button>
        <button onClick={() => disptachTwo('DECREMENT')}>decrement</button>
        <br />
        <button onClick={() => disptachTwo('RESET')}>reset</button>
      </div>
    </div>
  );
};

export default CounterTwoReduce;
