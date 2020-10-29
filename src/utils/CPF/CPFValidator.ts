import { CPFValidation } from './CPFValidation';

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

  public finalValidation () {
    const isKnownInvalid = this.knownInvalids();

    if ( isKnownInvalid )
      return CPFValidation.knownInvalids;

    const firstDigitValid = this.validateFirstDigit();

    if ( !firstDigitValid )
      return CPFValidation.firstDigitInvalid;

    const lastDigitValid = this.validateLastDigit();

    if ( !lastDigitValid )
      return CPFValidation.lastDigitInvalid;

    return CPFValidation.valid;
  }

  public validateFirstDigit () {
    const total = this.firstNumbers.map(
      ( number, index ) => ( number * this.arrayToValidateFirstDigit[ index ] )
    ).reduce(
      ( x, y ) => x + y, 0
    );

    let verificador = total * 10 % 11;
    verificador = ( verificador !== 10 ) ? verificador : 0;

    return ( this.firstDigit === verificador ) ? true : false;
  }

  public validateLastDigit () {
    const array = this.firstNumbers;
    array.push( this.firstDigit );
    const total = array.map(
      ( number, index ) => ( number * this.arrayToValidateLastDigit[ index ] )
    ).reduce(
      ( x, y ) => x + y, 0
    );

    let verificador = total * 10 % 11;
    verificador = ( verificador !== 10 ) ? verificador : 0;

    return ( this.lastDigit === verificador ) ? true : false;
  }

  public knownInvalids () {
    const fullArray = [ ...this.firstNumbers ];
    fullArray.push( this.firstDigit, this.lastDigit );

    const allEqual = fullArray.every( n => n === fullArray[ 0 ] );

    return allEqual;
  }

  private *numberGenerator ( first: number ) {
    let number = first;
    const lastNumber = 2;
    while ( number >= lastNumber )
      yield number--;
  }

}

export default CPFValidator;