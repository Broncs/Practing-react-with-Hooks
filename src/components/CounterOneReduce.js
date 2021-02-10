import React, { useReducer } from 'react';

const initialState = { count: 0, secondCounter: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.value };
    case 'DECREMENT':
      return { ...state, count: state.count - action.value };
    case 'INCREMENT2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'DECREMENT2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'RESET':
      return initialState;
    default:
      throw new Error('error in reduce');
  }
};

const CounterOneReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>FirstCounter - {state.count}</h1>
      <h1>Second counter - {state.secondCounter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>
        decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'INCREMENT', value: 2 })}>
        increment Two
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', value: 2 })}>
        decrement Two
      </button>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}>
          increment counter 2
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}>
          decrement counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  );
};

export default CounterOneReduce;
