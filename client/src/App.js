import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Add from './Pages/Add';
import HomePage from './Pages/HomePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailPage from './Pages/DetailPage';
import LandingPage from './Pages/LandingPage';
function App() {
  const user = localStorage.getItem('user');
  if (user) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='/home'
            element={user ? <HomePage /> : <Navigate to='/' />}
          />
          <Route path='/add' element={user ? <Add /> : <Navigate to='/' />} />
          <Route
            path='/journal/:id'
            element={user ? <DetailPage /> : <Navigate to='/' />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
