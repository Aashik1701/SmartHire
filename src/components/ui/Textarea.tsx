import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error = false, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          block w-full rounded-md shadow-sm
          ${error 
            ? 'border-error-300 text-error-900 placeholder-error-300 focus:ring-error-500 focus:border-error-500' 
            : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
          ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
          ${className}
        `}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;