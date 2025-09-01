import { createHashRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Listings from "../pages/Listings";
import Profile from "../pages/Profile";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register"; // ← استيراد صفحة Register
import ErrorPage from "../pages/Error";

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "listings", element: <Listings /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }, // ← تم الإضافة
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
