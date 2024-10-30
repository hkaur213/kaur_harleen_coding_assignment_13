import React from 'react';

export interface RowProps {
  children: React.ReactNode;
  disabled?: boolean; // Optional disabled prop
}

const Row: React.FC<RowProps> = ({ children, disabled }) => {
  return (
    <div className={`row ${disabled ? 'disabled' : ''}`}>
      {children}
    </div>
  );
};

export default Row;
