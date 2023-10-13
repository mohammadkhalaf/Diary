import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Loader from '../components/Loader';
import parse from 'html-react-parser';
import draftToHtml from 'draftjs-to-html';

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const getData = async () => {
    setLoading(true);
    try {
      const items = await axios.get(`/api/journals/detailpage/${id}`);
      setItem(items.data);

      setLoading(false);
    } catch (err) {}
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
          <div className='p-5'>
            <h1 className='my-3 text-2xl font-semibold capitalize'>
              {item !== null && item.title}

              {/* {item !== null && item.content} */}
            </h1>
            <div>
              {parse(draftToHtml(JSON.parse(item !== null && item.content)))}
            </div>
            {/* {item !== null &&
              ReactHtmlParser(draftToHtml(JSON.parse(item?.content)))} */}
            {/* {item !== null && parse(<p>{item?.content}</p>)} */}
          </div>
        )}
      </Layout>
    </>
  );
};

export default DetailPage;
