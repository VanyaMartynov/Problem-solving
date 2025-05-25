import React from 'react';
import type { ButtonProps } from '../types';

export const PrimaryButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
  >
    {children}
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
  >
    {children}
  </button>
); 