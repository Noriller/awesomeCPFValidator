import { BehaviorSubject } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { firstDigitFirstStep$ } from './DigitOrchestration';

export const knownInvalids$ = new BehaviorSubject( true );

export const knownInvalidStep = knownInvalids$.asObservable()
  .pipe(
    delay( 2000 ),
  ).pipe(
    tap( () => knownInvalids$.complete() ),
  );

knownInvalids$.asObservable().pipe(
  finalize( () =>
    firstDigitFirstStep$.next( 0 )
  )

).subscribe();