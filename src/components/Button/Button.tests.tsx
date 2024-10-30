import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeVisible();
  });

  it('should be disabled and have grey background when disabled', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('background-color: grey');
  });
});
