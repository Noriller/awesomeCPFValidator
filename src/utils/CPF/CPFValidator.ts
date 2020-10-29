import { CPFValidation, Digits, KnownInvalids, CPFValidateReturn } from './CPFValidation';

class CPFValidator {

  private firstNumbers: number[] = [];
  private firstDigit: number;
  private lastDigit: number;

  private arrayToValidateFirstDigit: number[] = [];
  private arrayToValidateLastDigit: number[] = [];

  // CPF: "111.111.111-11"
  // 9 numbers - 2 digits

  constructor ( private cpf: string ) {
    if ( cpf.length !== 11 ) throw new Error( 'Invalid CPF.' );

    this.firstNumbers = cpf.split( '' ).map( textNumber => parseInt( textNumber ) );
    this.lastDigit = this.firstNumbers.pop();
    this.firstDigit = this.firstNumbers.pop();

    this.arrayToValidateFirstDigit = [ ...this.numberGenerator( 10 ) ];
    this.arrayToValidateLastDigit = [ ...this.numberGenerator( 11 ) ];
  }

  public Validate () {

    return this.finalValidation();
  }

  public finalValidation (): CPFValidateReturn {

    const result: CPFValidateReturn = {
      text: CPFValidation.default,
      fullCpfNumber: this.cpf,
      animationProps: {
        knownInvalid: false,
      }
    };

    const isKnownInvalid = this.knownInvalids();

    if ( isKnownInvalid.stepValidation ) {
      result.text = CPFValidation.knownInvalids;
      result.animationProps.knownInvalid = isKnownInvalid.payload;
      return result;
    }

    const firstDigitValid = this.validateFirstDigit();
    result.animationProps.firstDigit = firstDigitValid.payload;

    if ( !firstDigitValid.stepValidation ) {
      result.text = CPFValidation.firstDigitInvalid;
      return result;
    }

    const lastDigitValid = this.validateLastDigit();
    result.animationProps.lastDigit = lastDigitValid.payload;

    if ( !lastDigitValid.stepValidation ) {
      result.text = CPFValidation.lastDigitInvalid;
      return result;
    }

    result.text = CPFValidation.valid;
    return result;
  }

  public validateFirstDigit (): Digits {
    const multiplicationArray = this.firstNumbers.map(
      ( number, index ) => ( number * this.arrayToValidateFirstDigit[ index ] )
    );

    const total = multiplicationArray.reduce(
      ( x, y ) => x + y, 0
    );

    let verificador = total * 10 % 11;
    verificador = ( verificador !== 10 ) ? verificador : 0;

    return {
      stepValidation: ( this.firstDigit === verificador ) ? true : false,
      payload: {
        finalMultiplication: multiplicationArray,
        digit: this.firstDigit
      }
    };
  }

  public validateLastDigit (): Digits {
    const array = this.firstNumbers;
    array.push( this.firstDigit );

    const multiplicationArray = array.map(
      ( number, index ) => ( number * this.arrayToValidateLastDigit[ index ] )
    );

    const total = multiplicationArray.reduce(
      ( x, y ) => x + y, 0
    );

    let verificador = total * 10 % 11;
    verificador = ( verificador !== 10 ) ? verificador : 0;

    return {
      stepValidation: ( this.lastDigit === verificador ) ? true : false,
      payload: {
        finalMultiplication: multiplicationArray,
        digit: this.lastDigit
      }
    };
  }

  public knownInvalids (): KnownInvalids {
    const fullArray = [ ...this.firstNumbers ];
    fullArray.push( this.firstDigit, this.lastDigit );

    const allEqual = fullArray.every( n => n === fullArray[ 0 ] );

    return {
      stepValidation: allEqual,
      payload: {
        number: fullArray[ 0 ]
      }
    };
  }

  private *numberGenerator ( first: number ) {
    let number = first;
    const lastNumber = 2;
    while ( number >= lastNumber )
      yield number--;
  }

}

export default CPFValidator;