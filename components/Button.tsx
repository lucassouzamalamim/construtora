import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary hover:text-primary border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-primary",
    gold: "bg-secondary text-primary hover:bg-primary hover:text-secondary border border-secondary hover:border-primary",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;