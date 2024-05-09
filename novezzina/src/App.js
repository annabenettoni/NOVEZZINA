import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Benvenuti from './pages/benvenuti';
import Spiegazione from './pages/spiegazione';
import Qr from './pages/components/qr';


const router = createBrowserRouter([
  { path: '/', element: <Benvenuti /> },
  { path: '/spiegazione', element: <Spiegazione /> },
  { path: '/qr', element: <Qr /> }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;