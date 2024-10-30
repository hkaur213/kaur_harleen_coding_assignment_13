import React from 'react';

export interface CellProps {
  children: React.ReactNode;
  disabled?: boolean; 
}

const Cell: React.FC<CellProps> = ({ children, disabled }) => {
  return (
    <td
      style={{
        backgroundColor: disabled ? 'lightgray' : 'white',
        cursor: disabled ? 'not-allowed' : 'default',
      }}
    >
      {children}
    </td>
  );
};

export default Cell; // Default export
