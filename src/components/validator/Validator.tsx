import React from 'react';
import InputBox from './InputBox/InputBox';
import ValidateButton from './ValidateButton/ValidateButton';
import ValidateShenanigans from './ValidateShenanigans/ValidateShenanigans';

const Validator = () => {
  return (
    <div className='app-container'>
      <div>Za Warudo</div>
      <div>
        <p></p>
      </div>
      <InputBox />
      <div>
        <p></p>
      </div>
      <ValidateButton />
      <div>
        <p></p>
      </div>
      <ValidateShenanigans />
    </div>
  );
};

export default Validator;
