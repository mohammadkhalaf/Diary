import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import HomePage from './Pages/HomePage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
