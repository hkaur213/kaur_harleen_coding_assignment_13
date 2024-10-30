import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

test('renders label', () => {
  const { getByText } = render(<Label text="Label Text" />);
  expect(getByText(/Label Text/i)).toBeInTheDocument();
});
