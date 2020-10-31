import { useEffect, useState } from 'react';
import { delay } from 'rxjs/operators';
import { knownInvalids$ } from '../ValidationOrchestration/KnownInvalidsOrchestration';

export const useBlink = (index: number) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const waitForIt =
      index * getRandomArbitrary(10, 20);
    const sub = knownInvalids$
      .pipe(delay(waitForIt))
      .subscribe(
        toBlink => {
          setBlink(toBlink);
        },
        () => {},
        () => {
          setBlink(false);
        },
      );

    return () => sub.unsubscribe();
  });

  return blink;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
