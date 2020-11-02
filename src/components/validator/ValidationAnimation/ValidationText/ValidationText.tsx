import { useEffect, useState } from 'react';
import { CPFValidateReturn } from '../../../../utils/CPF/CPFInterfaces';
import { cpfValidation$ } from '../../../../utils/CPF/CPFValidator';
import { knownInvalidStep } from '../ValidationOrchestration/KnownInvalidsOrchestration';

const ValidationText = () => {
  let validation: CPFValidateReturn;

  const [hideText, setHide] = useState(true);

  useEffect(() => {
    const sub = knownInvalidStep.subscribe(() => {
      setHide(false);
    });

    return () => sub.unsubscribe();
  }, []);

  cpfValidation$.subscribe(cpfReturn => {
    validation = cpfReturn;
  });

  return (
    <div
      style={{
        display: hideText ? 'none' : '',
        color: validation.animationProps.valid
          ? 'green'
          : 'red',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      }}>
      {validation.text}
    </div>
  );
};

export default ValidationText;
