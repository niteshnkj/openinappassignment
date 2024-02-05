import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UploadContainer from "./UploadContainer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "upload",
          element: <UploadContainer />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
