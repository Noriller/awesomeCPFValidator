import { CPFValidateReturn } from '../../../../utils/CPF/CPFValidation';
import { useRef, useEffect } from 'react';

function ValidationAnimation(
  validation: CPFValidateReturn,
) {
  console.log(validation);

  const myref = useRef(null);

  const elements = [];
  const indexes = [
    '1number',
    '2number',
    '3number',
    '1point',
    '4number',
    '5number',
    '6number',
    '2point',
    '7number',
    '8number',
    '9number',
    'hyphen',
    '1digit',
    '2digit',
  ];

  for (
    let index = 0;
    index <
    validation.fullCpfNumber.split('').length;
    index++
  ) {
    const element = validation.fullCpfNumber.split(
      '',
    )[index];
    elements.push(element);
  }

  elements.splice(3, 0, '.');
  elements.splice(7, 0, '.');
  elements.splice(11, 0, '-');

  const base = elements.map((element, index) => (
    <div
      key={indexes[index]}
      id={indexes[index]}
      style={{
        display: 'inline-block',
        padding: '10px',
      }}>
      {element}
    </div>
  ));

  console.log(myref);
  useEffect(() => {
    const list = myref.current.childNodes;
    list.forEach(element => {
      const value = element.innerHTML;
      if (!isNaN(value)) {
        console.log(value);
        console.log(element.id);
        element.innerHTML = value * 1;
      }
    });
  });

  return (
    <>
      <div ref={myref}>
        {base}
        <div>{validation.text}</div>
      </div>
    </>
  );
}

export default ValidationAnimation;
