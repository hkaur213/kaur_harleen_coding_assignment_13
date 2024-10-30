import React from 'react';
import { render } from '@testing-library/react';
import Img from './Img';

test('renders image', () => {
  const { getByAltText } = render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
  expect(getByAltText(/Placeholder/i)).toBeInTheDocument();
});
