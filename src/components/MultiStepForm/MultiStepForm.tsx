import React, { useState, useEffect, useCallback } from 'react';
import { useFormUrlState } from '../../hooks/useUrlState';
import AccountDetailsStep from './components/AccountDetailsStep';
import PersonalDetailsStep from './components/PersonalDetailsStep';
import NavigationButtons from './components/NavigationButtons';
import type { FormData, MultiStepFormProps, FormDataWithoutPassword } from './types';

const LoginMultiStepForm: React.FC<MultiStepFormProps> = ({ onSubmit, onChange }) => {
  const [step, setStep] = useState(1);
  const initialFormData: FormData = {
    email: '',
    userName: '',
    password: '',
    name: '',
    surname: '',
  };

  const { formState, updateFormState, clearFormState } = useFormUrlState<FormDataWithoutPassword>({
    paramName: 'form',
    initialValue: initialFormData,
    excludeFields: ['password'],
  });

  const [formData, setFormData] = useState<FormData>(formState as FormData || initialFormData);

  useEffect(() => {
    if (formState) {
      setFormData(prev => ({
        ...prev,
        ...formState,
        password: prev.password,
      }));
    }
  }, [formState]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    
    updateFormState({
      ...newFormData,
      password: ''
    });
    
    if (onChange) {
      onChange(newFormData);
    }
  }, [formData, onChange, updateFormState]);

  const handleNext = useCallback(() => {
    setStep(2);
  }, []);

  const handleBack = useCallback(() => {
    setStep(1);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    clearFormState();
  }, [formData, onSubmit, clearFormState]);

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

export default LoginMultiStepForm; 