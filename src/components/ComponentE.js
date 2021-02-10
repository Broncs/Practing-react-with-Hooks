import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { GlobalContext } from './useContext';

const ComponentE = () => {
  return (
    <div>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
