import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const register = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
        name,
      };
      await axios.post('/api/users/register', payload);
      toast('You are successfully registered');
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast('Something went wrong');
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && password && email) {
      register();
    }
  };
  return (
    <>
      <form
        className='flex  flex-col bg-primary h-screen justify-center items-center px-20  ml-20'
        onSubmit={submitHandler}
      >
        <h1 className='text-6xl text-gray-300 mb-10'>Register</h1>
        <input
          type='text'
          value={name}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          value={email}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='bg-gray-200 px-10 py-4 pointer'>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
