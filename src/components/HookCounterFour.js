import React, { useState } from 'react';

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random(1) * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add to list</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
