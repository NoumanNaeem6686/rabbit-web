import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
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
