import React from 'react';

interface inputProps {
  label?: string;
  type?: string;
  name?: string;
  className?: string;
  [props: string]: any;
}

const Input: React.FC<inputProps> = ({
  label,
  type = 'text',
  name,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium'>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        {...props}
        className='w-full px-4 py-2 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
      />
    </div>
  );
};

export default Input;
