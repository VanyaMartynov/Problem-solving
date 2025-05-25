import React from 'react';
import type { StepProps } from '../types';
import { inputClassName } from '../styles';

const AccountDetailsStep: React.FC<StepProps> = ({ formData, onFormDataChange }) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onFormDataChange}
          required
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={onFormDataChange}
          required
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onFormDataChange}
          required
          className={inputClassName}
        />
      </div>
    </>
  );
};

export default AccountDetailsStep; 