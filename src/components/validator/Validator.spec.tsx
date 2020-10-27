import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Validator from './Validator';

xdescribe('Validator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Validator />);
  });

  xit('should render a <InputBox />', () => {
    expect(
      wrapper.find('InputBox').length,
    ).toEqual(1);
  });

  xit('should render a <ValidateButton />', () => {
    expect(
      wrapper.find('ValidateButton').length,
    ).toEqual(1);
  });

  it.todo('coisas a serem feitas');
});
