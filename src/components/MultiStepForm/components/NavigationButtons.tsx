import React from 'react';
import type { NavigationButtonsProps } from '../types';

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNext, onBack, onSubmit, isLastStep }) => {
  if (isLastStep) {
    return (
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-base"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base"
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onNext}
      className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base"
    >
      Next
    </button>
  );
};

export default NavigationButtons; 