import React from 'react';
import type { StepProps } from '../types';
import { inputClassName } from '../styles';

const PersonalDetailsStep: React.FC<StepProps> = ({ formData, onFormDataChange }) => {
  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onFormDataChange}
          required
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={onFormDataChange}
          required
          className={inputClassName}
        />
      </div>
    </>
  );
};

export default PersonalDetailsStep; 