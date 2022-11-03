import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Orders from '../../pages/Orders/Orders';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <Checkout />,
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
