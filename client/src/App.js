import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import HomePage from './Pages/HomePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailPage from './Pages/DetailPage';
import LandingPage from './Pages/LandingPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/add' element={<Add />} />
          <Route path='/journal/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
