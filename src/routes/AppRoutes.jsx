import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Poli from "../pages/Poli";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DokterList from "../pages/DokterList";
import Layout from "../components/Layout"; // ✅ tambahkan

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/poli"
          element={
            <Layout>
              <Poli />
            </Layout>
          }
        />
        <Route
          path="/dokter"
          element={
            <Layout>
              <DokterList />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
