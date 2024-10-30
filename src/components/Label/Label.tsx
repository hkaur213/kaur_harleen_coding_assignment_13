import React from 'react';
import { LabelProps } from './Label.types';
import { StyledLabel } from './styled';

const Label: React.FC<LabelProps> = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;
