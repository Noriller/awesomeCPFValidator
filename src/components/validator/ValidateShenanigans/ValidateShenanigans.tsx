import React from 'react';
import CPFValidator from '../../../utils/CPF/CPFValidator';
import useChangeInputBox from '../InputBox/useInputBox';
import { useValidateClick } from './useValidateClick';

const ValidateShenanigans = () => {
  const click = useValidateClick();
  let text = click.toString();

  let cpf = useChangeInputBox();

  if (click)
    text = new CPFValidator(
      cpf.getUnmaskedCPF(),
    ).Validate();

  return <div>shenanigan: {text}</div>;
};

export default ValidateShenanigans;
