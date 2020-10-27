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
  const [value, setValue] = useState('');

  const handleChange = el => {
    let newValue = cpfMask(el.target.value);
    setValue(newValue);
    emitInput(newValue);
  };

  return (
    <input
      inputMode='numeric'
      value={value}
      placeholder={'000.000.000-00'}
      onChange={handleChange}
      className='inputBox'
    />
  );
};

function emitInput(input: string) {
  inputBox$.next(new CPF(input));
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
