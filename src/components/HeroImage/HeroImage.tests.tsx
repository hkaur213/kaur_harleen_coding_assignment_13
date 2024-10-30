import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image', () => {
  const { getByAltText } = render(
    <HeroImage src="https://via.placeholder.com/600x300" alt="Hero Placeholder" />
  );
  expect(getByAltText(/Hero Placeholder/i)).toBeInTheDocument();
});
