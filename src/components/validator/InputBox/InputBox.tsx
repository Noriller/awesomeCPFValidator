import React, { useState } from 'react';

const InputBox = () => {
  const [value, setValue] = useState(0);

  const handleChange = el => {
    const newValue = el.target.value;
    console.log(newValue);
    const lastNumber = parseInt(
      newValue.toString().slice(-1),
    );
    console.log(lastNumber);
    setValue(lastNumber);
  };

  const sanitizeInput = ev => {
    if (!isNaN(ev.target.value))
      document.querySelector(
        '#numberInput',
      ).value = '';
  };

  return (
    <input
      type='number'
      pattern='[0-9]'
      min='0'
      max='9'
      id='numberInput'
      maxLength={1}
      minLength={1}
      value={value}
      // defaultValue={0}
      onKeyDown={sanitizeInput}
      onInput={handleChange}
      // onChange={handleChange}
      className='inputBox'
    />
  );
};

export default InputBox;
