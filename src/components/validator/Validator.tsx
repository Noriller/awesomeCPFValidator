import React from 'react';
import InputBox from './InputBox/InputBox';
import ValidateButton from './ValidateButton/ValidateButton';

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
    </div>
  );
};

export default Validator;
