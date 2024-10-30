import React from 'react';
import { ImgProps } from './Img.types';
import { StyledImg } from './styled';

const Img: React.FC<ImgProps> = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};

export default Img;
