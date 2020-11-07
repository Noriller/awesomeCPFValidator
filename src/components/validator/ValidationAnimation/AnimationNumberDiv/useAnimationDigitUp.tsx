import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MyElement } from '../ValidationAnimation';
import { useDigitUp } from './useDigitUp';

export const useAnimationDigitUp = (
  element: MyElement,
  digitSubject: Subject<number>,
) => {
  const [value, setValue] = useState(
    element.number,
  );
  const [index, setIndex] = useState(null);

  useEffect(() => {
    digitSubject
      .asObservable()
      .pipe(distinctUntilChanged())
      .subscribe(setIndex);
  }, [digitSubject, index]);

  const { digit, done } = useDigitUp(
    element.number,
    element.firstDigit,
    index === element.index,
  );

  useEffect(() => {
    setValue(digit);
    if (done) {
      digitSubject.next(element.index + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digit, done]);

  return { value, done };
};
