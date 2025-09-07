import React from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Finder Directory App</h1>
      <Outlet />
    </div>
  );
}
