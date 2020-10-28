import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Validator from './Validator';

describe('Validator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Validator />);
  });

  it('should render a <InputBox />', () => {
    expect(
      wrapper.find('InputBox').length,
    ).toEqual(1);
  });

  it('should render a <ValidateButton />', () => {
    expect(
      wrapper.find('ValidateButton').length,
    ).toEqual(1);
  });
});
