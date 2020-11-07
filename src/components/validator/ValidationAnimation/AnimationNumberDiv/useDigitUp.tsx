import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { timerValue } from '../ValidationOrchestration/DigitOrchestration';

export const useDigitUp = (
  originalValue: number,
  finalValue: number | boolean,
  start: boolean,
) => {
  const [digit, setDigit] = useState(
    originalValue,
  );
  const [done, setDone] = useState(false);

  const timerTicker =
    finalValue > 100
      ? timerValue
      : timerValue * 10;

  const ticker$ = interval(timerTicker).pipe(
    takeWhile(() => !done),
  );

  useEffect(() => {
    if (!start) return;
    const sub = ticker$.subscribe(num => {
      const number = num + originalValue;
      if (number <= finalValue) {
        setDigit(number);
      } else {
        setDigit(number);
        setDone(true);
        sub.unsubscribe();
      }
    });
  }, [start]);

  return { digit, done };
};
