import { useState } from 'react';
import { MyElement } from '../ValidationAnimation';
import { useBlink } from './useBlink';

const AnimationNumberDiv = (
  element: MyElement,
) => {
  const [value] = useState(element.number);

  const blink = useBlink(element.index);

  return (
    <div
      className={blink ? 'blink_me' : ''}
      style={{
        display: 'inline-block',
        padding: '10px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      }}>
      {value}
    </div>
  );
};

export default AnimationNumberDiv;
