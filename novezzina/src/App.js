import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Benvenuti from './pages/benvenuti';
import Spiegazione from './pages/spiegazione';
import Ape from './pages/ape';
import Volpe from './pages/volpe';
import Farfalla from './pages/farfalla';
import Castoro from './pages/castoro';
import Rana from './pages/rana';
import Serpente from './pages/serpente';
import Scoiattolo from './pages/scoiattolo';
import Bruco from './pages/bruco';
import Mucca from './pages/mucca';
import Qr from './pages/qr';
import Fine from './pages/fine';


const router = createBrowserRouter([
  { path: '/', element: <Benvenuti /> },
  { path: '/spiegazione', element: <Spiegazione /> },
  { path: '/qr', element: <Qr /> },
  { path: '/ape', element: <Ape /> },
  { path: '/volpe', element: <Volpe /> },
  { path: '/farfalla', element: <Farfalla /> },
  { path: '/castoro', element: <Castoro /> },
  { path: '/rana', element: <Rana /> },
  { path: '/serpente', element: <Serpente /> },
  { path: '/scoiattolo', element: <Scoiattolo /> },
  { path: '/bruco', element: <Bruco /> },
  { path: '/mucca', element: <Mucca /> },
  { path: '/fine', element: <Fine /> }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;