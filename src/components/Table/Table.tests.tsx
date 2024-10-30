import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

test('renders table', () => {
  const { getByText } = render(
    <Table>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(getByText(/Cell 1/i)).toBeInTheDocument();
});
