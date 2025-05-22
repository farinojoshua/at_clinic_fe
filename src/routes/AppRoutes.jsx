import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Poli from "../pages/Poli";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DokterList from "../pages/DokterList";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import History from "../pages/History";
import Jadwaltemu from "../pages/Jadwaltemu";
import Popup from "../pages/Popup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/about'
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path='/poli'
          element={
            <Layout>
              <Poli />
            </Layout>
          }
        />
        <Route
          path='/dokter/:specialist_id'
          element={
            <Layout>
              <DokterList />
            </Layout>
          }
        />
        {/* ⛔ Tanpa Layout => Tanpa Navbar */}
        <Route path='/masuk' element={<Login />} />
        <Route path='/daftar' element={<Register />} />

        <Route
          path='/profile'
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path='/history'
          element={
            <Layout>
              <History />
            </Layout>
          }
        />
        <Route
          path='/jadwaltemu/:doctor_id'
          element={
            <Layout>
              <Jadwaltemu />
            </Layout>
          }
        />
        <Route
          path='/popup'
          element={
            <Layout>
              <Popup />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
