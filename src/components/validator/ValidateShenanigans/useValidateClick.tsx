import { useEffect, useState } from 'react';
import { CPF } from '../../../utils/CPF/CPF';
import { inputBox$ } from '../InputBox/InputBox';
import { validateButton$ } from '../ValidateButton/ValidateButton';

export function useValidateClick() {
  const [shenanigan, setShenanigan] = useState(
    false,
  );

  // console.log('useValidateClick');

  useEffect(() => {
    const sub = validateButton$.subscribe(
      setShenanigan,
    );

    // if (shenanigan)
    //   setTimeout(() => {
    //     validateButton$.next(false);
    //     inputBox$.next(new CPF(''));
    //   }, 500);

    return () => sub.unsubscribe();
  }, [shenanigan]);

  return shenanigan;
}
