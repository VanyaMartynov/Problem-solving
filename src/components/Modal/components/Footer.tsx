import React from 'react';
import type { ReactNode } from 'react';

interface FooterProps {
  primaryButton: ReactNode;
  secondaryButton: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ primaryButton, secondaryButton }) => {
  return (
    <div className="flex justify-end items-center gap-4 p-4 border-t">
      {secondaryButton}
      {primaryButton}
    </div>
  );
};

export default Footer; 