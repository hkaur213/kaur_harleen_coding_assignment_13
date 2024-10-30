import React from 'react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
};

export const Default = () => (
  <HeroImage src="https://via.placeholder.com/600x300" alt="Hero Placeholder" />
);
