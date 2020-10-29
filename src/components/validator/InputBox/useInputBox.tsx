import { useEffect, useState } from 'react';
import { CPF } from '../../../utils/CPF/CPF';
import { inputBox$ } from './InputBox';

function useChangeInputBox() {
  const [cpfObject, setCPF] = useState(
    new CPF(''),
  );

  // console.log('useChangeInputBox');

  useEffect(() => {
    const subscription = inputBox$.subscribe(
      setCPF,
    );

    return () => subscription.unsubscribe();
  }, []);

  return cpfObject;
}

export default useChangeInputBox;
