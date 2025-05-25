import { useCallback } from 'react';
import { useUrlParams } from './useUrlParams';

interface UseFormUrlStateOptions<T> {
  paramName: string;
  initialValue: T;
  excludeFields?: (keyof T)[];
  onLoad?: (data: T) => void;
}

export const useFormUrlState = <T extends Record<string, unknown>>({
  paramName,
  initialValue,
  excludeFields = [],
  onLoad,
}: UseFormUrlStateOptions<T>) => {
  const filterSensitiveData = useCallback((data: T): Partial<T> => {
    const filteredData = { ...data };
    excludeFields.forEach((field) => {
      delete filteredData[field];
    });
    return filteredData;
  }, [excludeFields]);

  const { value, setValue, clearUrlParam } = useUrlParams<Partial<T>>({
    paramName,
    initialValue: filterSensitiveData(initialValue),
    onLoad: (data) => {
      onLoad?.(data as T);
    },
  });

  const updateFormState = useCallback((newValue: T) => {
    setValue(filterSensitiveData(newValue));
  }, [setValue, filterSensitiveData]);

  return {
    formState: value,
    updateFormState,
    clearFormState: clearUrlParam,
  };
}; 