import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import RouterList from "./RouterConfig/Routes";

import NotFoundPage from "../pages/not-found/NotFound";

const RouterCapsule: React.FunctionComponent = () => {
  const ProtectedRoute = () => {
    const token = localStorage.getItem("token-auth");

    return token ? <Outlet /> : <Navigate to='/' />;
  };

  const protectedRouters = RouterList.filter(({ pageType }) => {
    return pageType === "protected";
  });
  const publicRouters = RouterList.filter(({ pageType }) => {
    return pageType === "public";
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {protectedRouters.map(({ Page, path }) => {
            return <Route path={path} key={path} element={<Page />} />;
          })}
        </Route>
        {publicRouters.map(({ Page, path }) => {
          return <Route path={path} key={path} element={<Page />} />;
        })}
        <Route path='*' key='not-found' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterCapsule;
