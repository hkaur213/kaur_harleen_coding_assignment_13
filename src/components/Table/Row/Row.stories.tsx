import React from 'react';
import Row from './Row'; // Import the Row component

export default {
  title: 'Components/Table/Row', // Story title
  component: Row, // Component being documented
};

// Define a default story
export const Default = () => <Row>Row Content</Row>;

// Define a disabled story
export const Disabled = () => <Row disabled>Disabled Row</Row>;
