import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ValidateButton from './ValidateButton';
import { useInputBox } from '../InputBox/InputBox';
import { CPF } from '../../../utils/CPF/CPF';

describe('ValidateButton', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ValidateButton />);
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length).toEqual(
      1,
    );
  });

  it('should be disabled if the cpf.fullCPFNumber is false', () => {
    expect(
      wrapper.find('button').prop('disabled'),
    ).toBe(true);
  });

  // it('should not be disabled if the cpf.fullCPFNumber is true', () => {

  //   expect(
  //     wrapper.find('button').prop('disabled'),
  //   ).toBe(false);
  // });

  // it( 'should ', () => {

  //  })
  // it( 'should ', () => {

  //  })
  // it( 'should ', () => {

  //  })
});
