import InputBox from './InputBox/InputBox';
import ValidateButton from './ValidateButton/ValidateButton';
import ValidateShenanigans from './ValidateShenanigans/ValidateShenanigans';

const Validator = () => {
  return (
    <div
      className='app-container'
      style={{
        flex: 1,
      }}>
      <div
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Za Warudo
      </div>
      <div>
        <p></p>
      </div>
      <InputBox />
      <div>
        <p></p>
      </div>
      <ValidateButton />
      <div>
        <p></p>
      </div>
      <ValidateShenanigans />
    </div>
  );
};

export default Validator;
