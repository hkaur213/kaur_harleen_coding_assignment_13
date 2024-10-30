import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { StyledRadio } from './styled';

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked }) => {
  return (
    <StyledRadio>
      <input type="radio" checked={checked} />
      {label}
    </StyledRadio>
  );
};

export default RadioButton;
