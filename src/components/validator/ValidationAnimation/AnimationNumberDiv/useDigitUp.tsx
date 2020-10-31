import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export const useDigitUp = (
  originalValue: number,
  finalValue: number | boolean,
  start: boolean,
) => {
  const [digit, setDigit] = useState(
    originalValue,
  );
  const [done, setDone] = useState(false);

  const ticker$ = interval(50).pipe(
    takeWhile(() => !done),
  );

  useEffect(() => {
    if (!start) return;
    ticker$.subscribe(num => {
      const number = num + originalValue;
      if (number <= finalValue) {
        setDigit(number);
      } else {
        setDone(true);
      }
    });
  }, [start]);

  return { digit, done };
};
