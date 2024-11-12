import React from 'react';
import { StoryFn, type Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { type IHeroImage } from './HeroImage.types';
import { HeroImg } from '.';

export default {
  title: 'Components Assignment/HeroImage',
  component: HeroImg,
} as Meta;

const Template: StoryFn<IHeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/1200x400',
  title: 'Welcome to Our Website',
  subtitle: 'Discover our amazing services',
  text: 'Learn More',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
