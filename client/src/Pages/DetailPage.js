import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Loader from '../components/Loader';
import ReactHtmlParser from 'react-html-parser';
import draftToHtml from 'draftjs-to-html';

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getData = async () => {
    setLoading(true);
    try {
      const items = await axios.get(`/api/journal/getsingleitem/${id}`);
      setItem(items.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(item);
  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          // <div>{ReactHtmlParser(draftToHtml(JSON.parse(item.content)))}</div>

          <div className='p-5'>
            <h1 className='my-3 text-2xl font-semibold capitalize'>
              {' '}
              {item !== null && item.title}{' '}
            </h1>

            {item !== null &&
              ReactHtmlParser(draftToHtml(JSON.parse(item?.content)))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default DetailPage;
