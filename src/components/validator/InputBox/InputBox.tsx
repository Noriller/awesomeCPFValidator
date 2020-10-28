import React, { useState } from 'react';
import { Subject } from 'rxjs';
import { cpfMask } from '../../../utils/CPF/cpfMask';
import { CPF } from '../../../utils/CPF/CPF';

const InputBox = () => {
  const [CPFValue, setCPF] = useState('');

  const handleChange = input => {
    const newCPFValue = cpfMask(
      input.target.value,
    );
    setCPF(newCPFValue);
    emitNewCPF(newCPFValue);
  };

  return (
    <input
      inputMode='numeric'
      value={CPFValue}
      placeholder={'000.000.000-00'}
      onChange={handleChange}
      className='inputBox'
    />
  );
};

function emitNewCPF(cpf: string) {
  inputBox$.next(new CPF(cpf));
}

export default InputBox;

export const inputBox$ = new Subject<CPF>();
