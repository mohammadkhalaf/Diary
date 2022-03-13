import React, { useState, useEffect } from 'react';
import Login from '../components/LoginForm';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className='h-screen flex items-center'>
        <div className='w-1/2 px-10'>
          <h1 className='text-8xl text-gray-700 capitalize'>App name</h1>
          <p className='text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel odio
            culpa facere quos ad id veniam quibusdam cupiditate laborum enim.
          </p>
          <div className='space-x-5'>
            <button
              className='bg-gray-300 px-10 py-3 '
              onClick={() => {
                setLoginForm(true);
                setRegisterForm(false);
              }}
            >
              Login
            </button>
            <button
              className='bg-gray-300 px-10 py-3 '
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
            <div>
              <Login />
            </div>
          )}
          {registerForm && (
            <div>
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
