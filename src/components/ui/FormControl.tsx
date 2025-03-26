import React from 'react';

interface FormControlProps {
  children: React.ReactNode;
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

const FormControl: React.FC<FormControlProps> = ({
  children,
  id,
  label,
  helperText,
  error,
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
}) => {
  const contextValues = {
    id,
    isRequired,
    isDisabled,
    isInvalid: isInvalid || !!error,
  };

  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-sm font-medium mb-1 ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {label}
          {isRequired && <span className="ml-1 text-error-500">*</span>}
        </label>
      )}
      
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return React.cloneElement(child as React.ReactElement<any>, {
            id,
            'aria-invalid': contextValues.isInvalid,
            'aria-describedby': helperText ? `${id}-helper-text` : undefined,
            'aria-required': isRequired,
            disabled: isDisabled,
          });
        }
        return child;
      })}
      
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-error-600">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p id={`${id}-helper-text`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormControl;