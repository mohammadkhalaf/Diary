import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [deleted, setDeleted] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const items = await axios.get(`/api/journal/getjournal/${user.id}`);

      setItems(items.data);
      setLoading(false);
    } catch (err) {
      toast('Something went wrong');
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const removeHandler = async (id) => {
    try {
      const { data } = await axios.delete(`/api/journal/delete/${id}`);
      toast(data.msg);
      getData();
    } catch (error) {}
  };

  return (
    <Layout>
      {loading && <Loader />}

      <div className='grid px-20 sm:mx-5 mt-5 '>
        <input
          type='text'
          className='border-2 h-10 w-full '
          placeholder='Title'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      {items.length === 0 && !loading && (
        <h2 className='text-center mt-10 text-gray-500 capitalize text-xl'>
          You have not added notes yet
        </h2>
      )}
      {items.length > 0 && (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-10'>
          {items.map((item) => {
            return (
              <div className='shadow-md p-3 ' key={item._id}>
                <div onClick={() => navigate(`/journal/${item._id}`)}>
                  <h1 className='text-primary text-lg font-semibold capitalize cursor-pointer'>
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                </div>
                <div className='flex justify-between items-center lg:flex-col'>
                  <div className='flex  mt-2'>
                    <button
                      className='px-3 py-2 mr-4 bg-red rounded text-white pointer'
                      onClick={() => removeHandler(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className='px-5 py-2 bg-primary rounded text-white pointer'
                      onClick={() => navigate(`/edit/${item._id}`)}
                    >
                      Edit
                    </button>
                  </div>
                  <span className='text-gray-500 text-sm lg:mt-5'>
                    created at {item.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
