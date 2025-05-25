import React from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  header: string;
  children: ReactNode;
}

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

interface FooterProps {
  primaryButton: ReactNode;
  secondaryButton: ReactNode;
}

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrimaryButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
  >
    {children}
  </button>
);

const SecondaryButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
  >
    {children}
  </button>
);

const Footer: React.FC<FooterProps> = ({ primaryButton, secondaryButton }) => {
  return (
    <div className="flex justify-end items-center gap-4 p-4 border-t">
      {secondaryButton}
      {primaryButton}
    </div>
  );
};

const Modal: React.FC<ModalProps> & {
  PrimaryButton: typeof PrimaryButton;
  SecondaryButton: typeof SecondaryButton;
} = ({ isOpen, setIsOpen, onClose, header, children }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  const childrenArray = React.Children.toArray(children);
  const content = childrenArray.filter(
    (child) =>
      !React.isValidElement(child) ||
      (child.type !== PrimaryButton && child.type !== SecondaryButton)
  );

  const primaryButton = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === PrimaryButton
  );
  const secondaryButton = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SecondaryButton
  );

  const hasFooterButtons = primaryButton || secondaryButton;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">{header}</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-full transition-colors bg-transparent border-0"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <section className="p-4">{content}</section>
        {hasFooterButtons && (
          <Footer
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
          />
        )}
      </div>
    </div>,
    document.body
  );
};

Modal.PrimaryButton = PrimaryButton;
Modal.SecondaryButton = SecondaryButton;

export default Modal; 