import React from 'react';
import Footer from './Footer'; // Import the Footer component

export default {
  title: 'Components/Table/Footer', // Story title
  component: Footer, // Component being documented
};

export const Default = () => <Footer>Footer Content</Footer>;

export const Disabled = () => <Footer disabled>Disabled Footer</Footer>;
