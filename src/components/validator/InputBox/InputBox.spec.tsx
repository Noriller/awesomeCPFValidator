import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import InputBox from './InputBox';

describe('Validator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<InputBox />);
  });

  it('should render a <input />', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it.todo('coisas a serem feitas');
});
