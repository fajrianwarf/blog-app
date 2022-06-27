import React from 'react';

interface containerProps {
  children: React.ReactNode;
  className?: string;
  [props: string]: any;
}

const Container: React.FC<containerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-sky-200'>
      <div
        {...props}
        className={`${
          className ? className : ''
        } px-4 py-6 bg-white shadow-sm rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
