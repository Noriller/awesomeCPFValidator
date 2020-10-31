import { useEffect, useState } from 'react';
import { distinctUntilChanged } from 'rxjs/operators';
import { MyElement } from '../ValidationAnimation';
import { firstDigitFirstStep$ } from '../ValidationOrchestration/FirstDigitOrchestration';
import { useDigitUp } from './useDigitUp';

export const useAnimationDigitUp = (
  element: MyElement,
) => {
  const [value, setValue] = useState(
    element.number,
  );
  const [index, setIndex] = useState(null);

  useEffect(() => {
    firstDigitFirstStep$
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(setIndex);
  }, [index]);

  const { digit, done } = useDigitUp(
    element.number,
    element.firstDigit,
    index === element.index,
  );

  useEffect(() => {
    setValue(digit);
    if (done) {
      firstDigitFirstStep$.next(
        element.index + 1,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digit, done]);

  return { value, done };
};
