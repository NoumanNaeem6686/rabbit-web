import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
