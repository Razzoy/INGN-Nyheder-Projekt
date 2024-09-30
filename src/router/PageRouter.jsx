import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index />
        <Route path='/category'/>
        <Route path='/*' element={<h2>404 not found...</h2>} />
      </Route>
    </Routes>
  );
};
