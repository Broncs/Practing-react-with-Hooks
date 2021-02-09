import React, { useState } from 'react';
import UseEffectMouse from './UseEffectMouse';

const UseEffectContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffectMouse />}
    </div>
  );
};

export default UseEffectContainer;
