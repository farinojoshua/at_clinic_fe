import { Link } from "react-router-dom";

import LogoAT from "../assets/Logo AT.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo & Nav Links */}
      <div className="flex items-center space-x-6">
        <Link to="/">
          <img
            src={LogoAT}
            alt="AT Clinic Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
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
    </nav>
  );
}