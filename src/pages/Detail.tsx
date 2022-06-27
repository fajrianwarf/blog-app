import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Detail: React.FC = () => {
  const { state }: any = useLocation();

  return (
    <div className='min-h-screen bg-sky-200'>
      <Navbar />
      <div className='container mx-auto px-4 py-4 md:py-8 '>
        <div className='flex justify-center items-center'>
          <div className='ml-auto w-3/5'>
            <h1 className='capitalize text-center text-3xl my-4'>
              {state.title}
            </h1>
          </div>
          <div className='ml-auto self-start'>
            <Link
              to='/'
              className=' bg-blue-300 px-2 py-1 rounded-md hover:bg-blue-200'
            >
              back
            </Link>
          </div>
        </div>
        <div className='bg-white rounded-md px-4 md:px-8 py-6 md:mt-4'>
          <div dangerouslySetInnerHTML={{ __html: state.content }}></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
