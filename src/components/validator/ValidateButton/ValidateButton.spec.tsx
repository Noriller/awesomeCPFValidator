import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ValidateButton from './ValidateButton';
import { CPF } from '../../../utils/CPF/CPF';

describe('ValidateButton', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ValidateButton />);
  });

  afterAll(() =>
    jest.unmock('../InputBox/useInputBox'),
  );

  it('should render a button', () => {
    expect(wrapper.find('button').length).toEqual(
      1,
    );
  });

  it.todo(
    'should be disabled if the cpf.fullCPFNumber is false',
  );

  it.todo(
    'should not be disabled if the cpf.fullCPFNumber is true',
  );
});
