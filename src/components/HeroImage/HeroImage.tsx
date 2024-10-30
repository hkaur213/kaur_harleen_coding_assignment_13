import React from 'react';
import { HeroImageProps } from './HeroImage.types';
import { StyledHeroImage } from './styled';

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return <StyledHeroImage src={src} alt={alt} />;
};

export default HeroImage;
