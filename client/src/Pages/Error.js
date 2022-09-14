import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className='bg-primary  text-white p-5 '>
        <h3 className='text-2xl '>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link
          className='bg-white text-primary fw-500 p-2 mt-2 block w-fit pointer'
          to='/'
        >
          back home
        </Link>
      </div>
    </>
  );
};

export default Error;
