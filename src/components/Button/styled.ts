import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
`;
