import { tap } from 'rxjs/operators';
import { MyElement } from '../ValidationAnimation';
import { useAnimationDigitUp } from './useAnimationDigitUp';
import { useBlink } from './useBlink';

const AnimationNumberDiv = (
  element: MyElement,
) => {
  const blink = useBlink(element.index);

  const { value, done } = useAnimationDigitUp(
    element,
  );

  return (
    <div
      className={blink ? 'blink_me ' : ''}
      style={{
        display:
          value > 0 || !done
            ? 'inline-block'
            : 'none',
        padding: '10px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      }}>
      {element ? value : ' '}
    </div>
  );
};

export default AnimationNumberDiv;
