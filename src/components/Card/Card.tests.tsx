import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders card', () => {
  const { getByText } = render(<Card title="Card Title" content="This is the card content." />);
  expect(getByText(/Card Title/i)).toBeInTheDocument();
});
