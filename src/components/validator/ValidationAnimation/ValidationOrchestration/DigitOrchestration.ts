import { BehaviorSubject } from 'rxjs';

export const timerValue = 0.1;

export const firstDigitFirstStep$ = new BehaviorSubject( null );

const firstDigitIndex = 9;
firstDigitFirstStep$.subscribe(
  index => {
    if ( index > firstDigitIndex ) {
      firstDigitSecondStep$.next( 0 );
    }
  }
);

export const firstDigitSecondStep$ = new BehaviorSubject( null );

firstDigitSecondStep$.subscribe(
  index => {
    if ( index > firstDigitIndex ) {
      lastDigitFirstStep$.next( 0 );
    }
  }
);

export const lastDigitFirstStep$ = new BehaviorSubject( null );

const lastDigitIndex = 10;
lastDigitFirstStep$.subscribe(
  index => {
    if ( index > lastDigitIndex ) {
      lastDigitSecondStep$.next( 0 );
    }
  }
);

export const lastDigitSecondStep$ = new BehaviorSubject( null );

lastDigitSecondStep$.subscribe(
  index => {
    if ( index > lastDigitIndex ) {
      // lastDigitFirstStep$.next( 0 );
      console.log( 'what now?' );
    }
  }
);