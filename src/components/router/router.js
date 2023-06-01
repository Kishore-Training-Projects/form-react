import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import FunctionForm from "../functionalform";

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
  
  
 
  ];
  
  export default Router;