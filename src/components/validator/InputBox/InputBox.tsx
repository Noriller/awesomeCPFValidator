import React, {
  useEffect,
  useState,
} from 'react';
import { Subject } from 'rxjs';
import { cpfMask } from '../../../utils/CPF/cpfMask';
import { CPF } from '../../../utils/CPF/CPF';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

const InputBox = () => {
  const [CPFValue, setCPF] = useState('');

  const handleChange = el => {
    const newCPFValue = cpfMask(el.target.value);
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

const inputBox$ = new Subject<CPF>();

export function useInputBox() {
  const [cpfObject, setCPF] = useState(
    new CPF(''),
  );

  useEffect(() => {
    const subscription = inputBox$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(cpf => setCPF(cpf));

    return () => subscription.unsubscribe();
  }, []);

  return cpfObject;
}
