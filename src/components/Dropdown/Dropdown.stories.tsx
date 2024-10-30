import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Default = () => <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />;
