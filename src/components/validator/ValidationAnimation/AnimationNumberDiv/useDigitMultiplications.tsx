import { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { useDigitDown } from './useDigitDown';
import { useDigitUp } from './useDigitUp';

export const useDigitMultiplications = (
  totalSumArray: number,
  digitBeingVerified: number,
  subject: Subject<number>,
) => {
  const [index, setIndex] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    subject
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(setIndex);
  }, [index]);

  const {
    digit: accumulation,
    done: accumulationDone,
  } = useDigitUp(0, totalSumArray, index > 0);

  const {
    digit: multiplication,
    done: multiplicationDone,
  } = useDigitUp(
    totalSumArray,
    totalSumArray * 10,
    accumulationDone,
  );

  const {
    digit: module,
    done: moduleDone,
  } = useDigitDown(
    totalSumArray * 10,
    digitBeingVerified,
    multiplicationDone,
  );

  useEffect(() => {
    if (!accumulationDone) {
      setValue(accumulation);
    } else if (
      accumulationDone &&
      !multiplicationDone
    ) {
      setValue(multiplication);
    } else {
      setValue(module);
    }
  }, [
    accumulation,
    accumulationDone,
    module,
    multiplication,
    multiplicationDone,
  ]);

  const result = (
    <div>
      {!moduleDone || value > 0 ? value : null}
      {!multiplicationDone ? ' * 10' : null}
      {!moduleDone ? ` % 11` : null}
      {` == ${digitBeingVerified}`}
    </div>
  );

  const done = moduleDone;

  return { result, done };
};
