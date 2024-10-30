import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown', () => {
  const { getByRole } = render(<Dropdown options={['Option 1', 'Option 2']} />);
  const select = getByRole('combobox');
  expect(select).toBeInTheDocument();
});
