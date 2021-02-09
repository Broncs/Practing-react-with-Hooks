import React, { useState } from 'react';

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const decrement = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increment}> increment </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByFive}>increment 5</button>
    </div>
  );
};

export default HookCounterTwo;
