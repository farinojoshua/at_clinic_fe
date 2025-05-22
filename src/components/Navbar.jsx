import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoAT from "../assets/Logo AT.png";
import FaUserCircle from "../assets/FaUserCircle.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2'>
          <img
            src={LogoAT}
            alt='AT Clinic Logo'
            className='h-10 w-10 object-contain'
          />
        </Link>

        {/* Hamburger for mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-blue-600 text-2xl focus:outline-none'
          >
            ☰
          </button>
        </div>

        {/* Action Buttons - Desktop */}
        <div className='hidden md:flex space-x-3 items-center'>
          <Link
            to='/poli'
            className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition'
          >
            Buat Janji Temu
          </Link>

          {isLogin && (
            <Link
              to='/history'
              className='text-sm text-blue-600 hover:underline'
            >
              Riwayat
            </Link>
          )}

          {isLogin ? (
            <>
              <img
                src={FaUserCircle}
                alt='User'
                onClick={() => navigate("/profile")}
                className='h-9 w-9 rounded-full cursor-pointer'
              />
              <button
                onClick={handleLogout}
                className='text-sm text-red-500 hover:underline ml-2'
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition'
            >
              Masuk / Daftar
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className='md:hidden mt-3 flex flex-col space-y-2'>
          <Link
            to='/poli'
            className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition transform text-white text-sm font-medium px-4 py-2 rounded-full text-center cursor-pointer'
            onClick={() => setMenuOpen(false)}
          >
            Buat Janji Temu
          </Link>

          {isLogin && (
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/history");
              }}
              className='text-center text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-100'
            >
              Riwayat
            </button>
          )}

          {isLogin ? (
            <>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile");
                }}
                className='text-center text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-100'
              >
                Profil
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className='text-center text-red-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-red-100'
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition transform text-white text-sm font-medium px-4 py-2 rounded-full text-center cursor-pointer'
              onClick={() => setMenuOpen(false)}
            >
              Masuk / Daftar
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
