import { CPFValidateReturn } from '../../../utils/CPF/CPFValidation';
import React, {
  useEffect,
  useState,
} from 'react';
import AnimationNumberDiv from './AnimationNumberDiv/AnimationNumberDiv';
import { knownInvalidStep } from './ValidationOrchestration';

function ValidationAnimation(
  validation: CPFValidateReturn,
) {
  const [hideText, setHide] = useState(true);

  const base = prepareElementsToAppend(
    validation,
  );

  useEffect(() => {
    const sub = knownInvalidStep.subscribe(
      complete => {
        setHide(false);
      },
    );

    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <div>
        {base}
        <div
          style={{
            display: hideText ? 'none' : '',
            color: validation.animationProps.valid
              ? 'green'
              : 'red',
            fontSize: '1.1rem',
            fontWeight: 'bold',
          }}>
          {validation.text}
        </div>
      </div>
    </>
  );
}

export default ValidationAnimation;

export interface MyElement {
  index: number;
  number: number;
  firstDigit: number | boolean;
  lastDigit: number | boolean;
}

function prepareElementsToAppend(
  validation: CPFValidateReturn,
) {
  console.log(validation);

  const elements = [];

  for (
    let index = 0;
    index < validation.fullCpfArray.length;
    index++
  ) {
    const number = validation.fullCpfArray[index];

    const element: MyElement = {
      index,
      number,
      firstDigit:
        validation.animationProps.firstDigit
          ?.array?.[index] ?? false,
      lastDigit:
        validation.animationProps.lastDigit
          ?.array?.[index] ?? false,
    };

    console.log(element);
    elements.push(element);
  }

  elements.splice(3, 0, '.');
  elements.splice(7, 0, '.');
  elements.splice(11, 0, '-');

  const base = elements.map((element, index) => (
    <AnimationNumberDiv
      key={index}
      {...element}
    />
  ));
  return base;
}
