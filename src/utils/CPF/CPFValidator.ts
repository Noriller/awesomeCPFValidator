import { ReplaySubject } from 'rxjs';
import { CPFValidation, CPFValidateReturn, ValidationSteps } from './CPFInterfaces';

class CPFValidator {

  private cpfArray: number[] = [];
  private numbers: number[] = [];
  private firstDigit: number;
  private lastDigit: number;

  private arrayToValidateFirstDigit: number[] = [];
  private arrayToValidateLastDigit: number[] = [];

  private resultValidation: CPFValidateReturn;

  // CPF: "111.111.111-11"
  // 9 numbers - 2 digits

  constructor ( private cpf: string ) {
    if ( cpf.length !== 11 ) throw new Error( 'Invalid CPF.' );

    this.cpfArray = cpf.split( '' ).map( textNumber => parseInt( textNumber ) );
    this.numbers = this.cpfArray.slice( 0, 9 );
    this.firstDigit = this.cpfArray.slice( -2, -1 )[ 0 ];
    this.lastDigit = this.cpfArray.slice( -1 )[ 0 ];

    this.arrayToValidateFirstDigit = [ ...this.numberGenerator( 10 ) ];
    this.arrayToValidateLastDigit = [ ...this.numberGenerator( 11 ) ];

    this.resultValidation = {
      text: CPFValidation.default,
      fullCpfArray: this.cpfArray,
      animationProps: {
        knownInvalid: true,
      }
    };
  }

  public Validate () {

    ( !this.knownInvalids() ) &&
      this.validateFirstDigit() &&
      this.validateLastDigit();

    cpfValidation$.next( this.resultValidation );
  }

  public knownInvalids (): ValidationSteps {
    const allEqual = this.cpfArray.every( n => n === this.cpfArray[ 0 ] );

    this.resultValidation.animationProps.knownInvalid = allEqual;

    if ( allEqual )
      this.resultValidation.text = CPFValidation.knownInvalids;

    return allEqual;
  }

  public validateFirstDigit (): ValidationSteps {

    const { array, sum, verification, validDigit } = this.validateDigit(
      this.firstDigit, this.numbers, this.arrayToValidateFirstDigit );

    this.resultValidation.animationProps.firstDigit = {
      array,
      sum,
      verification,
      verifiedDigit: this.firstDigit
    };

    if ( !validDigit )
      this.resultValidation.text = CPFValidation.firstDigitInvalid;

    return validDigit;
  }

  public validateLastDigit (): ValidationSteps {
    const numbersToValidate = this.cpfArray.slice( 0, 10 );

    const { array, sum, verification, validDigit } = this.validateDigit(
      this.lastDigit, numbersToValidate, this.arrayToValidateLastDigit );

    this.resultValidation.animationProps.lastDigit = {
      array,
      sum,
      verification,
      verifiedDigit: this.lastDigit
    };

    if ( validDigit ) {
      this.resultValidation.text = CPFValidation.valid;
      this.resultValidation.animationProps.valid = validDigit;
    } else {
      this.resultValidation.text = CPFValidation.lastDigitInvalid;
    }

    return validDigit;
  }

  private validateDigit ( digit: number, numbersToValidate: number[], multiplierArray: number[] ) {
    const array = numbersToValidate.map(
      ( number, index ) => ( number * multiplierArray[ index ] )
    );

    const sum = array.reduce(
      ( x, y ) => x + y, 0
    );

    let verification = sum * 10 % 11;
    verification = ( verification !== 10 ) ? verification : 0;

    const validDigit = ( digit === verification ) ? true : false;

    return { array, sum, verification, validDigit };
  }

  private *numberGenerator ( first: number ) {
    let number = first;
    const lastNumber = 2;
    while ( number >= lastNumber )
      yield number--;
  }

}

export default CPFValidator;

export const cpfValidation$ = new ReplaySubject<CPFValidateReturn>( 1 );