import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './styled';

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <StyledButton disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
