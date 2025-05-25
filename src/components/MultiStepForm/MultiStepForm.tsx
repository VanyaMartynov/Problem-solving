import React, { useState, useEffect } from 'react';
import { useFormUrlState } from '../../hooks/useUrlState';

interface FormData {
  email: string;
  userName: string;
  password: string;
  name: string;
  surname: string;
  [key: string]: string; // Add index signature
}

interface MultiStepFormProps {
  onSubmit: (data: FormData) => void;
  onChange?: (data: FormData) => void;
}

interface StepProps {
  formData: FormData;
  onFormDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputClassName = "mt-1 block w-full px-4 py-3 text-base text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";

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

interface NavigationButtonsProps {
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  isLastStep?: boolean;
}

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

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onSubmit, onChange }) => {
  const [step, setStep] = useState(1);
  const initialFormData: FormData = {
    email: '',
    userName: '',
    password: '',
    name: '',
    surname: '',
  };

  const { formState, updateFormState, clearFormState } = useFormUrlState<FormData>({
    paramName: 'form',
    initialValue: initialFormData,
    excludeFields: ['password'],
    onLoad: (data) => {
      onChange?.(data as FormData);
    },
  });

  const [formData, setFormData] = useState<FormData>(formState as FormData || initialFormData);

  useEffect(() => {
    if (formState) {
      setFormData(formState as FormData);
    }
  }, [formState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    updateFormState(newFormData);
    onChange?.(newFormData);
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    clearFormState();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 ? (
        <>
          <AccountDetailsStep 
            formData={formData} 
            onFormDataChange={handleChange}
          />
          <NavigationButtons onNext={handleNext} />
        </>
      ) : (
        <>
          <PersonalDetailsStep 
            formData={formData} 
            onFormDataChange={handleChange}
          />
          <NavigationButtons onBack={handleBack} onSubmit={handleSubmit} isLastStep />
        </>
      )}
    </form>
  );
};

export default MultiStepForm; 