import CPFValidator from '../../../utils/CPF/CPFValidator';
import useChangeInputBox from '../InputBox/useInputBox';
import { useValidateClick } from './useValidateClick';

const ValidateShenanigans = () => {
  const click = useValidateClick();
  const initialText = `Why don't you try using:
                        All the same numbers: 111.111.111-11
                        One that you know is false: 123.456.789-00
                        Or one that you know is true: 012.345.678-90
                      Go on... git it a try.`;

  let text = initialText;

  let cpf = useChangeInputBox();

  if (click)
    text = new CPFValidator(
      cpf.getUnmaskedCPF(),
    ).Validate();

  return (
    <text style={{ whiteSpace: 'pre-line' }}>
      {text}
    </text>
  );
};

export default ValidateShenanigans;
