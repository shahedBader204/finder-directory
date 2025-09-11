import { createHashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Listings from '../pages/Listings';
import Profile from '../pages/Profile';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ErrorPage from '../pages/Error';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createHashRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'listings',
        element: (
          <ProtectedRoute>
            <Listings />
          </ProtectedRoute>
        ),
      },
      { path: 'profile', element: <Profile /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
