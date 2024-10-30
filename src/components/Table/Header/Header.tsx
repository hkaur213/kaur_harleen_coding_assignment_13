import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  disabled?: boolean; // Optional disabled prop
}

const Header: React.FC<HeaderProps> = ({ children, disabled }) => {
  return (
    <div className={`header ${disabled ? 'disabled' : ''}`}>
      {children}
    </div>
  );
};

export default Header;
