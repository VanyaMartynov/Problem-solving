export interface FormData {
  email: string;
  userName: string;
  password: string;
  name: string;
  surname: string;
}

export interface MultiStepFormProps {
  onSubmit: (data: FormData) => void;
}

export interface StepProps {
  formData: FormData;
  onFormDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NavigationButtonsProps {
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  isLastStep?: boolean;
} 