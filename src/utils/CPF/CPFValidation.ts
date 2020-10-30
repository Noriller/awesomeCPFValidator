
export enum CPFValidation {
  knownInvalids = `How dare you?
  I don't even need to to try to know this one is INVALID.`,
  firstDigitInvalid = `At least entertain me bit more.
  I knew it was INVALID the moment I saw the first digit.`,
  lastDigitInvalid = `This is a INVALID one, and now you know it.`,
  valid = `Yes, this one is a VALID one.`,
  default = `Da frak you're doing?`,
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