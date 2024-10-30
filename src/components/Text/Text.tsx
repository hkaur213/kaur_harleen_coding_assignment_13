import React from 'react';
import { TextProps } from './Text.types';
import { StyledText } from './styled';

const Text: React.FC<TextProps> = ({ content }) => {
  return <StyledText>{content}</StyledText>;
};

export default Text;
