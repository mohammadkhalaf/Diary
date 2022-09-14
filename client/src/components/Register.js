import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = async () => {
    try {
      const payload = {
        email,
        password,
        name,
      };
      const response = await axios.post('/api/users/register', payload);

      toast('You have successfully registered, please login ');
    } catch (err) {
      toast(err.response.data.msg);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && password && email) {
      register();

      setName('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <>
      <form
        className='flex  flex-col bg-primary h-screen justify-center items-center px-20  ml-20 sm:ml-0'
        onSubmit={submitHandler}
      >
        <h1 className='text-6xl text-gray-300 mb-10'>Register</h1>
        <input
          type='text'
          value={name}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          value={email}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          value={password}
          className='border-2 h-10 w-full border-gray-300 px-5 bg-transparent mb-5 text-white'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' className='bg-gray-200 px-10 py-4 pointer'>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
