import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react'; // Import screen here
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  it('renders the title and subtitle', () => {
    render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
      />,
    );

    // Use screen.getByText to find elements
    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test Subtitle')).toBeVisible();
  });

  it('calls onClick when the button is clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
        text="Click Me"
        onClick={mockOnClick}
      />,
    );

    // Use screen.getByText to find elements
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
