
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
  fullCpfNumber: string;
  animationProps: {
    knownInvalid: KnownInvalids[ "payload" ] | boolean,
    firstDigit?: Digits[ 'payload' ],
    lastDigit?: Digits[ 'payload' ];
  };
}

interface ValidationSteps {
  stepValidation: boolean;
  payload: {};
}
export interface KnownInvalids extends ValidationSteps {
  payload: {
    number: number;
  };
}


export interface Digits extends ValidationSteps {
  payload: {
    finalMultiplication: number[],
    digit: number;
  };
}