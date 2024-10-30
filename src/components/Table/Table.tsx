import React from 'react';
import { TableProps } from './Table.types';
import { StyledTable } from './styled';

const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
