import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Poli from "../pages/Poli";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jadwaltemu from "../pages/Jadwaltemu";
import Popup from "../pages/Popup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/poli' element={<Poli />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jadwaltemu' element={<Jadwaltemu />} />
        <Route path='/popup' element={<Popup />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
