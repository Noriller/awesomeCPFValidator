import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export const useDigitUp = (
  value: number,
  start: boolean,
) => {
  const [digit, setDigit] = useState(value);
  const [done, setDone] = useState(false);

  const ticker$ = interval(30).pipe(
    takeWhile(() => !done),
  );

  useEffect(() => {
    if (!start) return;
    ticker$.subscribe(num => {
      const number = value - num;
      if (number > 0) {
        setDigit(number);
      } else {
        setDone(true);
      }
    });
  }, [start]);

  return { digit, done };
};
