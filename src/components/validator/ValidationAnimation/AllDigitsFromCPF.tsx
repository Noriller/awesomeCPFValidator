import { CPFValidateReturn } from '../../../utils/CPF/CPFInterfaces';
import React from 'react';
import AnimationNumberDiv from './AnimationNumberDiv/AnimationNumberDiv';
import { MyElement } from './ValidationAnimation';
import { cpfValidation$ } from '../../../utils/CPF/CPFValidator';

const AllDigitsFromCPF = () => {
  let validation: CPFValidateReturn;

  cpfValidation$.subscribe(
    cpfReturn => (validation = cpfReturn),
  );

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

  elements.splice(3, 0, false);
  elements.splice(7, 0, false);
  elements.splice(11, 0, false);

  const base = elements.map((element, index) => (
    <AnimationNumberDiv
      key={index}
      {...element}
    />
  ));

  return <>{base}</>;
};

export default AllDigitsFromCPF;
