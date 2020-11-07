import { CPFValidateReturn } from '../../../../utils/CPF/CPFInterfaces';
import { cpfValidation$ } from '../../../../utils/CPF/CPFValidator';
import { useDigitMultiplications } from '../AnimationNumberDiv/useDigitMultiplications';
import {
  firstDigitSecondStep$,
  lastDigitSecondStep$,
} from '../ValidationOrchestration/DigitOrchestration';

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
    validation.animationProps.firstDigit
      ?.verifiedDigit,
    firstDigitSecondStep$,
  );

  const {
    result: accumulatorLastDigit,
    done: lastDigitDone,
  } = useDigitMultiplications(
    validation.animationProps.lastDigit?.sum,
    validation.animationProps.lastDigit
      ?.verification,
    validation.animationProps.lastDigit
      ?.verifiedDigit,
    lastDigitSecondStep$,
  );

  return (
    <div>
      {accumulatorLastDigit}
      {accumulatorFirstDigit}
    </div>
  );
};

export default ValidationDigitMultiplicationsDiv;
