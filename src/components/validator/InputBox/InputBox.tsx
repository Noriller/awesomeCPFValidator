import { useState } from 'react';
import { Subject } from 'rxjs';
import { cpfMask } from '../../../utils/CPF/cpfMask';
import { CPF } from '../../../utils/CPF/CPF';
import { useEffect } from 'react';
import useChangeInputBox from './useInputBox';
import { useValidateClick } from '../ValidateShenanigans/useValidateClick';

const InputBox = () => {
  const [CPFValue, setCPF] = useState('');
  const validateButtonClicked = useValidateClick();
  const cpfChanges = useChangeInputBox();

  const handleChange = input => {
    const newCPFValue = cpfMask(
      input.target.value,
    );
    setCPF(newCPFValue);
    emitNewCPF(newCPFValue);
  };

  useEffect(() => {
    setCPF(cpfChanges.cpf);
  }, [cpfChanges]);

  return (
    <input
      inputMode='numeric'
      disabled={validateButtonClicked}
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
