import React from 'react';

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  [props: string]: any;
}

const Button: React.FC<buttonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className ? className : 'bg-sky-500 focus:ring-sky-200 hover:bg-sky-600'
      }
        border border-transparent uppercase px-6 py-2.5 text-sm font-medium transition duration-300 rounded text-white w-full mt-4`}
    >
      {children}
    </button>
  );
};

export default Button;
