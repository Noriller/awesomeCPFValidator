import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { timerValue } from '../ValidationOrchestration/DigitOrchestration';

export const useDigitDown = (
  startValue: number,
  finalValue: number,
  start: boolean,
) => {
  const [digit, setDigit] = useState(startValue);
  const [done, setDone] = useState(false);

  const timerTicker =
    startValue > 100
      ? timerValue
      : timerValue * 100;

  const ticker$ = interval(timerTicker).pipe(
    takeWhile(() => !done),
  );

  useEffect(() => {
    if (!start) return;
    const sub = ticker$.subscribe(num => {
      const number = startValue - num;
      if (number >= finalValue) {
        setDigit(number);
      } else {
        setDone(true);
        sub.unsubscribe();
      }
    });
  }, [start]);

  return { digit, done };
};
