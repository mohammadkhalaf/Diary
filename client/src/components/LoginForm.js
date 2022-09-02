import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
      };
      const user = await axios.post('/api/users/login', payload);
      console.log(user.data);

      toast('You are successfully logged in');

      localStorage.setItem('user', JSON.stringify(user.data));
      navigate('/home');
      setLoading(false);
    } catch (err) {
      toast(err.response.data.msg);
    }
  };
  useEffect(() => {});

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      login();
    }
  };
  useEffect(() => {
    return () => {
      setPassword('');
      setEmail('');
    };
  }, []);

  return (
    <>
      <form
        className='flex  flex-col bg-primary h-screen justify-center items-center px-20  ml-20 sm:ml-0'
        onSubmit={submitHandler}
      >
        <h1 className='text-6xl text-gray-300 mb-10'>Login</h1>

        <input
          type='text'
          value={email}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-gray-500'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-gray-500'
          placeholder='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-gray-200 px-10 py-4 pointer'>Login</button>
      </form>
    </>
  );
};

export default Login;
