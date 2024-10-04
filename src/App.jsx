import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout'
import "./App.scss";
import { SingleNews } from "./pages/SingleNews";
import { LandingPage } from './pages/LandingPage';
import { Categories } from "./pages/Categories";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='/singleNews/:newsslug' element={<SingleNews/>}/>
            <Route path='/categories/:categories' element={<Categories/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/*' element={<h2>404 not found...</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
