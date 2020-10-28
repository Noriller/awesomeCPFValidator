import React from 'react';
import { useValidateClick } from './useValidateClick';

const ValidateShenanigans = () => {
  let text = useValidateClick().toString();

  return <div>shenanigan: {text}</div>;
};

export default ValidateShenanigans;
