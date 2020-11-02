import { useState, useEffect } from 'react';
import { distinctUntilChanged } from 'rxjs/operators';
import { firstDigitSecondStep$ } from '../ValidationOrchestration/DigitOrchestration';
import { useDigitDown } from './useDigitDown';
import { useDigitUp } from './useDigitUp';

export const useDigitMultiplications = (
  totalValue: number,
  digitBeingVerified: number,
) => {
  const [index, setIndex] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    firstDigitSecondStep$
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(setIndex);
  }, [index]);

  const {
    digit: accumulation,
    done: accumulationDone,
  } = useDigitUp(0, totalValue, index > 0);

  const {
    digit: multiplication,
    done: multiplicationDone,
  } = useDigitUp(
    totalValue,
    totalValue * 10,
    accumulationDone,
  );

  const {
    digit: module,
    done: moduleDone,
  } = useDigitDown(
    totalValue * 10,
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
