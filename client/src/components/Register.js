import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <form className='flex  flex-col bg-primary h-screen justify-center items-center px-20  ml-20'>
        <h1 className='text-6xl text-gray-300 mb-10'>Register</h1>
        <input
          type='text'
          value={name}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5'
          placeholder='Name'
        />
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
        <button className='bg-gray-200 px-10 py-4 pointer'>Register</button>
      </form>
    </>
  );
};

export default Register;
