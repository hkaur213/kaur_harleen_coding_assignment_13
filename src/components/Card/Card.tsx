import React from 'react';

interface CardProps {
  title?: string;
  content?: string;
  disabled?: boolean;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, disabled }) => {
  return (
    <div data-testid="card-container" style={{ opacity: disabled ? 0.4 : 1 }}>
      <h2>{title}</h2>
      <p>{disabled ? 'Content not available' : content}</p>
    </div>
  );
};

// Default export
export default Card;
