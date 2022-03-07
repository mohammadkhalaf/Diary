import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
