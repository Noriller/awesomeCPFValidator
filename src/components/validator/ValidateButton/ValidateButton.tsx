import useChangeInputBox from '../InputBox/useInputBox';
import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { useValidateClick } from '../ValidateShenanigans/useValidateClick';

const ValidateButton = () => {
  const [buttonState, setDisabled] = useState(
    true,
  );
  const { fullCPFNumber } = useChangeInputBox();
  const shouldBeDisabled = !fullCPFNumber;
  const validateClick = useValidateClick();

  useEffect(() => {
    setDisabled(shouldBeDisabled);
    if (validateClick) setDisabled(validateClick);
  }, [shouldBeDisabled, validateClick]);

  const submitForValidation = () => {
    emitClick();
  };

  return (
    <button
      hidden={buttonState}
      disabled={buttonState}
      onClick={submitForValidation}>
      Start Validation
    </button>
  );
};

export default ValidateButton;

function emitClick() {
  validateButton$.next(true);
}

export const validateButton$ = new Subject();
