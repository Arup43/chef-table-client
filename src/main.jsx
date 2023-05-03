import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Blog from "./pages/Blog/Blog";
import ChefRecipes from "./pages/ChefRecipes/ChefRecipes";
import NotFound from "./pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef-recipes/:id",
        element: <ChefRecipes></ChefRecipes>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
