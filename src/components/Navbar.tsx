import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkAuth } from '../api';

const Navbar: React.FC = () => {
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    checkAuth(localStorage.getItem('blog-token'), setUserData);
  }, []);
  return (
    <div className='bg-gradient-to-t from-blue-300 via-sky-400 to-sky-600 drop-shadow-md'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between px-4 py-4'>
          <Link to='/' className='capitalize font-semibold hover:text-blue-700'>
            Simple Blog app
          </Link>
          <h3 className='capitalize'>Welcome {userData?.full_name}</h3>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
