import React, { useState, useEffect } from 'react';

const UseEffectFour = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log('runned');

    setCount((prevValue) => prevValue + 1);
  };

  // When have a function call outside ,
  // you can put it in useEffect to rebember to add dependency to it

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffectFour;
