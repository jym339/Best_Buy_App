import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full bg-[#0046BE] hover:bg-[#003da5] text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.01] shadow-lg text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};