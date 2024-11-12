// Table.tsx
import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? 'lightgrey' : 'white')};
  color: ${(props) => (props.disabled ? 'darkgrey' : 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Table: React.FC<{ disabled?: boolean; children: React.ReactNode }> = ({
  disabled,
  children,
}) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
