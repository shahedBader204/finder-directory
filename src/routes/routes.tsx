import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Listings from '../pages/Listings';
import AddListing from '../pages/AddListing';
import SingleListing from '../pages/SingleListing';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/listings', element: <Listings /> },
  {
    path: '/add-listing',
    element: (
      <ProtectedRoute>
        <AddListing />
      </ProtectedRoute>
    ),
  },
  {
    path: '/listing/:id',
    element: (
      <ProtectedRoute>
        <SingleListing />
      </ProtectedRoute>
    ),
  },
]);
