import React from 'react';

export interface FooterProps {
  children: React.ReactNode;
  disabled?: boolean; // Optional disabled prop
}

const Footer: React.FC<FooterProps> = ({ children, disabled }) => {
  return (
    <div className={`footer ${disabled ? 'disabled' : ''}`}>
      {children}
    </div>
  );
};

export default Footer;
