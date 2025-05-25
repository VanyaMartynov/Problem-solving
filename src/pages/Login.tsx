import React, { useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import LoginMultiStepForm from '../components/MultiStepForm/MultiStepForm';
import { useModal } from '../hooks/useModal';

interface FormData {
  email: string;
  userName: string;
  password: string;
  name: string;
  surname: string;
}

const Login: React.FC = () => {
  const { isOpen, setIsOpen, showModal } = useModal();
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = useCallback((data: FormData) => {
    setFormData(data);
    setIsOpen(false);
    console.log('Form submitted:', data);
  }, [setIsOpen]);

  const handleFormChange = useCallback((data: FormData) => {
    console.log('Form changed:', data);
  }, []);

  const handleModalClose = useCallback(() => {
    console.log('Modal closed');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>

        <button
          onClick={showModal}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Open Registration Form
        </button>

        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={handleModalClose}
          header="Registration Form"
        >
          <LoginMultiStepForm 
            onSubmit={handleFormSubmit} 
            onChange={handleFormChange}
          />
        </Modal>

        {formData && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-black">Submitted Data:</h2>
            <pre className="bg-gray-50 p-4 rounded text-black">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 