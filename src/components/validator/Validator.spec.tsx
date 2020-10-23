import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Validator from './Validator';

describe('Validator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Validator />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it.todo('coisas a serem feitas');
});
