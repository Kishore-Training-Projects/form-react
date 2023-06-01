import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import FunctionForm from "../functionalform";
import ClassForm from "../classform";
import App from "../../App";
function Router() {
    return (
      <BrowserRouter>
        <Routes>
          {routerList.map((route, i) => (
            <Route exact key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }



  const routerList = [
    {
      path: "/function",
      element: <FunctionForm />,
    },
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/class",
      element: <ClassForm />,
    },
  
 
  ];
  
  export default Router;