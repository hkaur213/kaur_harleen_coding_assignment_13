import React from 'react';
import Header from './Header'; // Import the Header component

export default {
  title: 'Components/Table/Header', // Story title
  component: Header, // Component being documented
};

export const Default = () => <Header>Header Content</Header>;

export const Disabled = () => <Header disabled>Disabled Header</Header>;
