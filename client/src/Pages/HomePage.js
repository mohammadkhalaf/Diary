import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Layout from '../components/Layout';
import Loader from '../components/Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const getData = async () => {
    setLoading(true);
    try {
      const items = await axios.get(`/api/journal/getsingleitem/${user._id}`);
      console.log(items);

      setItems(items.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const removeHandler = () => {
    console.log('remove');
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
      {items.length === 0 && (
        <h2 className='text-center mt-10 text-gray-500 capitalize text-xl'>
          You have not added notes yet
        </h2>
      )}
      {items.length > 0 && (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-10'>
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(term.toLowerCase())
            )
            .map((item) => {
              return (
                <div className='shadow-md p-3 cursor-pointer'>
                  <h1
                    className='text-primary text-lg font-semibold capitalize'
                    onClick={() => navigate(`/journal/${item._id}`)}
                  >
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                  <div className='flex justify-between items-center'>
                    <div className='flex  mt-2'>
                      <button
                        className='px-3 py-2 mr-4 bg-red rounded text-white pointer'
                        onClick={removeHandler}
                      >
                        Delete
                      </button>
                      <button className='px-5 py-2 bg-primary rounded text-white pointer'>
                        Edit
                      </button>
                    </div>
                    <span className='text-gray-500 text-sm'>
                      at {item.createdAt.slice(0, 10)}
                    </span>
                    {/* <span className='text-gray-500 text-sm'>
                      postedBy {item.postedBy}
                    </span> */}
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
