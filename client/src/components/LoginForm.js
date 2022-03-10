import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const login = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
      };
      await axios.post('/api/users/login', payload);
      toast('You are successfully logged in');
    } catch (err) {
      console.log(err);
      toast('Something went wrong');
    }
  };

  return (
    <>
      <form className='flex  flex-col bg-primary h-screen justify-center items-center px-20  ml-20'>
        <h1 className='text-6xl text-gray-300 mb-10'>Login</h1>

        <input
          type='text'
          value={email}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5'
          placeholder='Email'
        />
        <input
          type='text'
          value={password}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5'
          placeholder='password'
        />
        <button className='bg-gray-200 px-10 py-4 pointer'>Login</button>
      </form>
    </>
  );
};

export default Login;
