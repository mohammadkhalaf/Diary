import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Layout = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const clickHandler = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className='layout flex w-ful'>
      {showSidebar && (
        <div className='sidebar'>
          <Sidebar />
        </div>
      )}
      <div className='w-full'>
        <div className='header bg-primary h-20 w-full flex items-center pl-5'>
          <GiHamburgerMenu color='gray' size={35} onClick={clickHandler} />
        </div>
        <div className='content'>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
