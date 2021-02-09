import React, { useEffect, useState } from 'react';

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `clicked ${count} times`;
    console.log('i runned');
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default UseEffectOne;
