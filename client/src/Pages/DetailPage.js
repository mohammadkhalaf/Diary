import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Loader from '../components/Loader';

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getData = async () => {
    setLoading(true);
    try {
      const items = await axios.get(`/api/journal/getsingleitem/${id}`);
      setItem(items.data);
      console.log(item);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h1>{item.title}</h1>
          </div>
        )}
      </Layout>
    </>
  );
};

export default DetailPage;
