import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Validator from './Validator';

describe('Validator', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<Validator />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});

test('renders deploy link', () => {
  const { getByText } = render(<Validator />);
  const linkElement = getByText('Za Warudo');
  expect(linkElement).toBeInTheDocument();
});
