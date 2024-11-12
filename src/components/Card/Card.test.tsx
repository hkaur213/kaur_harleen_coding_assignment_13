import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('should display the provided title and content', () => {
    render(<Card title="Example Title" content="Example Content" disabled={false} />);
    expect(screen.getByText('Example Title')).toBeInTheDocument();
    expect(screen.getByText('Example Content')).toBeInTheDocument();
  });

  it('should display "Content not available" when disabled', () => {
    render(<Card title="Disabled Card" content="Example Content" disabled={true} />);
    expect(screen.getByText('Disabled Card')).toBeVisible();
    expect(screen.getByText('Content not available')).toBeVisible();
  });

  it('should have reduced opacity when disabled', () => {
    const { container } = render(<Card title="Disabled Card" content="Example Content" disabled={true} />);
    const cardContainer = container.querySelector('[data-testid="card-container"]');
    expect(cardContainer).toHaveStyle('opacity: 0.4');
  });
});
