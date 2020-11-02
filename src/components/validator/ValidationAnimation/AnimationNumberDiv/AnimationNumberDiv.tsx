import { tap } from 'rxjs/operators';
import { MyElement } from '../ValidationAnimation';
import { useAnimationDigitUp } from './useAnimationDigitUp';
import { useBlink } from './useBlink';
import { useAnimationDigitDown } from './useAnimationDigitDown';
import {
  firstDigitFirstStep$,
  firstDigitSecondStep$,
} from '../ValidationOrchestration/DigitOrchestration';

const AnimationNumberDiv = (
  element: MyElement,
) => {
  const blink = useBlink(element.index);

  const {
    value: digitUpValue,
    done: digitUpDone,
  } = useAnimationDigitUp(
    element,
    firstDigitFirstStep$,
  );

  const {
    value: digitDownValue,
    done: digitDownDone,
  } = useAnimationDigitDown(
    element,
    firstDigitSecondStep$,
  );

  return (
    <div
      className={blink ? 'blink_me ' : ''}
      style={{
        display: !digitDownDone
          ? 'inline-block'
          : 'none',
        padding: '10px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      }}>
      {element && !digitUpDone
        ? digitUpValue
        : digitDownValue}
    </div>
  );
};

export default AnimationNumberDiv;
