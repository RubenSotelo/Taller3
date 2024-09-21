import { Route, Routes } from "react-router-dom";
import { ConfigRoutes } from "./ConfigRoutes";

export const Router = () => {
  return (
    <Routes>
      {
        ConfigRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      }
    </Routes>
  )
};
