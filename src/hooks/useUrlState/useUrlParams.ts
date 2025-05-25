import { useCallback, useState } from 'react';
import { encodeData, decodeData } from './utils/encoding';

interface UseUrlParamsOptions<T> {
  paramName: string;
  initialValue: T;
  onLoad?: (data: T) => void;
}

export const useUrlParams = <T>({ paramName, initialValue, onLoad }: UseUrlParamsOptions<T>) => {
  const [value, setValue] = useState<T>(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedValue = params.get(paramName);
    
    if (encodedValue) {
      try {
        const decodedValue = decodeData<T>(encodedValue);
        onLoad?.(decodedValue);
        return decodedValue;
      } catch (error) {
        console.error('Failed to decode URL parameter:', error);
        return initialValue;
      }
    }
    
    return initialValue;
  });

  const updateUrl = useCallback((newValue: T) => {
    const params = new URLSearchParams(window.location.search);
    const encodedValue = encodeData(newValue);
    params.set(paramName, encodedValue);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [paramName]);

  const setValueAndUpdateUrl = useCallback((newValue: T) => {
    setValue(newValue);
    updateUrl(newValue);
  }, [updateUrl]);

  const clearUrlParam = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete(paramName);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [paramName]);

  return {
    value,
    setValue: setValueAndUpdateUrl,
    clearUrlParam,
  };
}; 