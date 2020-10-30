import { useRef } from 'react';
import { of } from 'rxjs';
import CPFValidator from '../../../utils/CPF/CPFValidator';
import useChangeInputBox from '../InputBox/useInputBox';
import { useValidateClick } from './useValidateClick';
import ValidationAnimation from '../ValidationAnimation/ValidationAnimation';

const ValidateShenanigans = () => {
  const click = useValidateClick();
  const initialText = (
    <text
      style={{
        fontSize: '0.8rem',
        // fontWeight: 'lighter',
        fontStyle: 'italic',
      }}>
      {`Why don't you try using: 
      All the same numbers: 111.111.111-11
      One that you know is false: 123.456.789-00
      Or one that you know is true: 012.345.678-90
      Go on... git it a try.`}
    </text>
  );

  let text = initialText;

  let cpf = useChangeInputBox();

  if (click) {
    const resultValidation = new CPFValidator(
      cpf.getUnmaskedCPF(),
    ).Validate();

    text = (
      <ValidationAnimation
        {...resultValidation}
      />
    );
  }

  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      {text}
    </div>
  );
};

export default ValidateShenanigans;
