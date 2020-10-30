import { BehaviorSubject, concat, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export const knownInvalids$ = new BehaviorSubject( true );

export const knownInvalidStep = knownInvalids$.asObservable()
  .pipe(
    delay( 3000 )
  ).pipe(
    tap( () => knownInvalids$.complete() )
  );

// fullAnimation
//   .pipe( tap( () => 'fully?' ) )
//   .subscribe( () => { } );



export const fullAnimation = concat( knownInvalids$ ).pipe(
  tap( () => console.log( 'fullly?' ) )
);