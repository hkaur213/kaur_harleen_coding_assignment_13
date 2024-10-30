import React, { useState } from 'react';
import { DropdownProps } from './Dropdown.types';
import { StyledDropdown } from './styled';

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <StyledDropdown>
      <select onChange={(e) => setSelected(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selected && <span>Selected: {selected}</span>}
    </StyledDropdown>
  );
};

export default Dropdown;
