import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

export const Default = () => (
  <Table>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    </tbody>
  </Table>
);
