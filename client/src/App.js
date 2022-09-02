import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Add from './Pages/Add';
import HomePage from './Pages/HomePage';
import Error from './Pages/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailPage from './Pages/DetailPage';
import LandingPage from './Pages/LandingPage';
import Editpage from './Pages/Editpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='/home'
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/add'
            element={
              <ProtectedRoutes>
                <Add />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/journal/:id'
            element={
              <ProtectedRoutes>
                <DetailPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/edit/:id'
            element={
              <ProtectedRoutes>
                <Editpage />
              </ProtectedRoutes>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/' />;
  }
};
