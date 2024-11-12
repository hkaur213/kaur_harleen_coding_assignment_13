import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Running Test for Text', () => {
  test('Check Text Font Size', () => {
    render(<Text types="paragraph" text="Text" />);
    const textElement = screen.getByText('Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('font-size: 1rem'); // Update to check for 1rem
  });

  test('has correct style when disabled', () => {
    render(<Text disabled text="Disabled Text" />);
    const textElement = screen.getByText('Disabled Text');
    expect(textElement).toHaveStyle('background-color: rgb(238, 238, 238)'); // Update to the actual color
    expect(textElement).toHaveStyle('opacity: 0.6'); // Update to match your component's opacity
    expect(textElement).toHaveStyle('cursor: not-allowed'); // Check cursor style
  });
});
