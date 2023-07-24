import {Routes, Route} from "react-router-dom";
import Layout from "../components/layout/layout";
import routes from "./routes";
import ProtectedRoutes from "./ProtectedRoute";
import Dashboard from "../components/page/Dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({id, path, Element}) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      {/* RUTAS PRIVADAS  */}
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
