import { useInputBox } from '../InputBox/InputBox';
import React, {
  useEffect,
  useState,
} from 'react';

const ValidateButton = () => {
  const [buttonState, setDisabled] = useState(
    true,
  );
  const { fullCPFNumber } = useInputBox();
  const shouldBeDisabled = !fullCPFNumber;

  useEffect(() => {
    setDisabled(shouldBeDisabled);
  }, [shouldBeDisabled]);

  const submitForValidation = () =>
    console.log('ola');

  return (
    <button
      disabled={buttonState}
      onClick={submitForValidation}>
      Start Validation
    </button>
  );
};

export default ValidateButton;
