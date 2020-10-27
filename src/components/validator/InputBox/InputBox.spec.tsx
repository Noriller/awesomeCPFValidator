import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import InputBox from './InputBox';

describe('Validator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<InputBox />);
  });

  it('should render a <input />', () => {
    expect(wrapper.find('input').length).toEqual(
      1,
    );
  });

  it('should give CPF with the correct mask', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: '12345678900',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('123.456.789-00');
  });

  it('should trim the CPF with the correct mask to the 11th number', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: '12345678900123456789',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('123.456.789-00');
  });

  it('should return empty without value', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: '',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('');
  });

  it('should return empty when passing only non digit characters', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value:
          'sdfndsfbsdf.lkjsdb,fksdjfbsdj!fkbdslfk',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('');
  });

  it('should return the masked value even with non digit characters in between', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value:
          'sdfn1dsf2bs345df.l6kj7s8db,fk9sdjf0bsdj!fk0bdslfk',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('123.456.789-00');
  });

  it('should return partial masked value with a partial input', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: '1234567',
      },
    });

    expect(
      wrapper.find('input').prop('value'),
    ).toBe('123.456.7');
  });
});
