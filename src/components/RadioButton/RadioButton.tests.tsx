import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button', () => {
  const { getByLabelText } = render(<RadioButton label="Radio Button" />);
  expect(getByLabelText(/Radio Button/i)).toBeInTheDocument();
});
