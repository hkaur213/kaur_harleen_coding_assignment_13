import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('renders text', () => {
  const { getByText } = render(<Text content="This is a text component." />);
  expect(getByText(/This is a text component./i)).toBeInTheDocument();
});
