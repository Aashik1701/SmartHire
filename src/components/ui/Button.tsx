import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const getVariantStyles = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return `bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500`;
    case 'secondary':
      return `bg-secondary-100 text-secondary-800 hover:bg-secondary-200 focus:ring-secondary-400`;
    case 'tertiary':
      return `bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500`;
    case 'success':
      return `bg-success-600 text-white hover:bg-success-700 focus:ring-success-500`;
    case 'warning':
      return `bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-400`;
    case 'danger':
      return `bg-error-600 text-white hover:bg-error-700 focus:ring-error-500`;
    default:
      return `bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500`;
  }
};

const getSizeStyles = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'md':
      return 'px-4 py-2 text-base';
    case 'lg':
      return 'px-6 py-3 text-lg';
    default:
      return 'px-4 py-2 text-base';
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  loadingText,
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  const variantClasses = getVariantStyles(variant);
  const sizeClasses = getSizeStyles(size);
  
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center font-medium rounded-md
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses}
        ${sizeClasses}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg className="w-4 h-4 mr-2 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {isLoading && loadingText ? loadingText : children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;