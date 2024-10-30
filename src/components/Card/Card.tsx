import React from 'react';
import { CardProps } from './Card.types';
import { StyledCard } from './styled';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
