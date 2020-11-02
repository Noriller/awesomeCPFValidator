import { CPFValidateReturn } from '../../../../utils/CPF/CPFInterfaces';
import { cpfValidation$ } from '../../../../utils/CPF/CPFValidator';
import { useDigitMultiplications } from '../AnimationNumberDiv/useDigitMultiplications';

const ValidationDigitMultiplicationsDiv = () => {
  let validation: CPFValidateReturn;

  cpfValidation$.subscribe(
    cpfReturn => (validation = cpfReturn),
  );

  const {
    result: accumulatorFirstDigit,
    done: firstDigititDone,
  } = useDigitMultiplications(
    validation.animationProps.firstDigit?.sum,
    validation.animationProps.firstDigit
      ?.verification,
  );

  const {
    result: accumulatorLastDigit,
    done: lastDigitDone,
  } = useDigitMultiplications(
    validation.animationProps.lastDigit?.sum,
    validation.animationProps.lastDigit
      ?.verification,
  );

  return (
    <div>
      {firstDigititDone
        ? accumulatorLastDigit
        : accumulatorFirstDigit}
    </div>
  );
};

export default ValidationDigitMultiplicationsDiv;
