import React from 'react';
import Cell from './Cell'; // Import the Cell component

export default {
  title: 'Components/Table/Cell', // Story title
  component: Cell, // Component being documented
};

// Define a default story
export const Default = () => <Cell>Cell Content</Cell>;

// Define a disabled story
export const Disabled = () => <Cell disabled>Disabled Cell</Cell>;
