import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  header: string;
  children: ReactNode;
}

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
} 