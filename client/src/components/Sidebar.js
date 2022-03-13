import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { title: 'Home', path: '/home' },
    { title: 'Add', path: '/add' },
    { title: 'Edit', path: '/edit' },
    { title: 'Profile', path: '/profile' },
    { title: 'Logout', path: '/logout' },
  ];
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
        {navItems.map((item, index) => {
          return item.title !== 'Logout' ? (
            <Link
              to={`${item.path}`}
              className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700'
              key={index}
            >
              {item.title}
            </Link>
          ) : (
            <span
              className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700 pointer'
              onClick={logoutHandler}
            >
              Logout
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
