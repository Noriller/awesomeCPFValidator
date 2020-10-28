import { useEffect, useState } from 'react';
import { CPF } from '../../../utils/CPF/CPF';
import { inputBox$ } from './InputBox';

function useInputBox() {
  const [cpfObject, setCPF] = useState(
    new CPF(''),
  );

  useEffect(() => {
    const subscription = inputBox$.subscribe(
      setCPF,
    );

    return () => subscription.unsubscribe();
  }, []);

  return cpfObject;
}

export default useInputBox;
