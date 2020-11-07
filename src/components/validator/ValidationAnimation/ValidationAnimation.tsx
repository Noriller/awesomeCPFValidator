import ValidationDigitMultiplicationsDiv from './ValidationDigitMultiplicationsDiv/ValidationDigitMultiplicationsDiv';
import ValidationText from './ValidationText/ValidationText';
import AllDigitsFromCPF from './AllDigitsFromCPF';

function ValidationAnimation() {
  return (
    <>
      <div>
        <ValidationDigitMultiplicationsDiv />
        <AllDigitsFromCPF />
        <ValidationText />
      </div>
    </>
  );
}

export default ValidationAnimation;

export interface MyElement {
  index: number;
  number: number;
  firstDigit: number | boolean;
  lastDigit: number | boolean;
}
