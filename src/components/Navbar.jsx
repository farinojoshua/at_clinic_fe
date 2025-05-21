import { Link } from "react-router-dom";
import { useState } from "react";
import LogoAT from "../assets/Logo AT.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={LogoAT}
            alt="AT Clinic Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/poli"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition"
          >
            Buat Janji Temu
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition"
          >
            Masuk / Daftar
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2">
          <Link
            to="/poli"
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition transform text-white text-sm font-medium px-4 py-2 rounded-full text-center cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Buat Janji Temu
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition transform text-white text-sm font-medium px-4 py-2 rounded-full text-center cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Masuk / Daftar
          </Link>
        </div>
      )}
    </nav>
  );
}
