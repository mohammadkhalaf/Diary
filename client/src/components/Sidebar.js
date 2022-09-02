import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <div className='bg-primary w-60 h-screen flex flex-col'>
      <div>
        <h1 className='text-3xl font-bold mt-10 ml-5 text-white '>My Diary</h1>
      </div>
      <div className='flex flex-col mt-20'>
        <Link
          to='/home'
          className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700'
        >
          Home
        </Link>
        <Link
          to='/add'
          className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700'
        >
          Add
        </Link>

        <Link
          onClick={logoutHandler}
          to='/'
          className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700'
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
