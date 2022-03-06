import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Add', path: '/add' },
    { title: 'Edit', path: '/edit' },
    { title: 'Profile', path: '/profile' },
    { title: 'Logout', path: '/logout' },
  ];
  return (
    <div className='bg-primary w-60 h-screen flex flex-col'>
      <div>
        <h1 className='text-3xl font-bold mt-10 ml-5 text-white '>My Diary</h1>
      </div>
      <div className='flex flex-col mt-20'>
        {navItems.map((item, index) => {
          return (
            <Link
              to={`${item.path}`}
              className='text-gray-300 hover:bg-gray-50 pl-10 py-5 hover:text-gray-700'
              key={index}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
