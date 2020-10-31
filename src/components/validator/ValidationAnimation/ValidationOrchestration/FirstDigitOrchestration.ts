import { BehaviorSubject, concat, interval, scheduled, Subject } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';

export const firstDigitFirstStep$ = new BehaviorSubject( null );

// export const firstDigitStep = firstDigit$.asObservable()
//   .pipe(
//     delay( 2000 ),
//     tap( () => console.log( 'delay' ) )
//   ).pipe(
//     tap( () => firstDigit$.complete() ),
//     tap( () => console.log( 'tap pra completa' ) )
//   );

firstDigitFirstStep$.asObservable().pipe(
  finalize( () => console.log( 'banana' ) )
).subscribe();