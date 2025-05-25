import { useState, useCallback } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  showModal: () => void;
  hideModal: () => void;
  toggleModal: () => void;
}

export const useModal = (initialState = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const showModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    setIsOpen,
    showModal,
    hideModal,
    toggleModal,
  };
}; 