
export enum CPFValidation {
  default = ``,
  knownInvalids = `How dare you?
  I don't even need to to try to know this one is INVALID.`,
  notKnownInvalid = `At least not lazy enough to put all the same number.
  Let's check the first digit.`,
  firstDigitInvalid = `At least entertain me bit more.
  I knew it was INVALID the moment I saw the first digit.`,
  firstDigitIsValid = `First digit is valid... let's see the last digit...`,
  lastDigitInvalid = `This is a INVALID one, and now you know it.`,
  valid = `Yes, this one is a VALID one.`,
}


export interface CPFValidateReturn {
  text: CPFValidation;
  fullCpfArray: number[];
  animationProps: {
    knownInvalid: boolean,
    firstDigit?: Digits,
    lastDigit?: Digits,
    valid?: boolean,
  };
}
interface Digits {
  array: number[];
  sum: number;
  verification: number;
}

export interface ValidationSteps extends Boolean {
}