import React, { useState, useEffect } from 'react';
import Login from '../components/LoginForm';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const LandingPage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <div className='h-screen flex items-center lg:flex-col'>
        <div className='w-1/2 px-10 space-y-5'>
          <h1 className='text-8xl text-primary capitalize mb-5'>Mo Journal</h1>
          <p className='text-lg'>
            <span className='block font-semibold text-4xl'>
              Quickly revisit moments from the past.
            </span>
            Use Mo Journal take a trip back in time. No time machine needed.
          </p>
          <div className='space-x-5 mt-5'>
            <button
              className='bg-primary text-blue px-10 py-3 rounded'
              onClick={() => {
                setLoginForm(true);
                setRegisterForm(false);
              }}
            >
              Login
            </button>
            <button
              className='bg-primary text-blue px-10 py-3 rounded'
              onClick={() => {
                setRegisterForm(true);
                setLoginForm(false);
              }}
            >
              Register
            </button>
          </div>
        </div>
        <div className='w-1/2'>
          {!loginForm && !registerForm && (
            <lottie-player
              src='https://assets9.lottiefiles.com/packages/lf20_LQu2Ly.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          )}
          {loginForm && (
            <div className='relative'>
              <span
                className='absolute top-2 right-3 cursor-pointer'
                onClick={() => setLoginForm(false)}
              >
                <AiOutlineClose className='text-white text-3xl' />
              </span>
              <Login />
            </div>
          )}
          {registerForm && (
            <div className='relative'>
              <span
                className='absolute top-2 right-3 cursor-pointer'
                onClick={() => setRegisterForm(false)}
              >
                <AiOutlineClose className='text-white text-3xl' />
              </span>
              <Register />
            </div>
          )}

          <img src='' alt='' />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
