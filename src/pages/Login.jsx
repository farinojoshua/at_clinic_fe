import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/Logo AT.png';
import orang from '../assets/Mbak AT.png';
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      // Login successful, redirect handled in context
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-md mx-auto px-8 flex flex-col">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-30 w-auto"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Masuk
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3C5 3 1.73 7.11 1.73 7.11a1 1 0 000 1.78S5 13 10 13s8.27-4.11 8.27-4.11a1 1 0 000-1.78S15 3 10 3z" />
                      <path d="M10 11a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.293 2.293a1 1 0 011.414 0l13 13a1 1 0 01-1.414 1.414l-1.5-1.5A7.963 7.963 0 0110 15c-5 0-8.27-4.11-8.27-4.11a1 1 0 010-1.78l1.563-1.563L2.293 2.293zM10 5a5 5 0 015 5c0 .795-.21 1.535-.57 2.18l-1.43-1.43A2.99 2.99 0 0010 7a3 3 0 00-2.18.57l-1.43-1.43A5 5 0 0110 5z" />
                    </svg>
                  )}
                </button>
              </div>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 ml-2 self-center">
                Lupa Password?
              </a>
            </div>

            {error && (
              <div className="text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-00 mb-3 focus:outline-none focus:ring-2 hover:bg-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Belum Mendaftar?{' '}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Daftar
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-2/5">
        <img
          className="h-full w-full object-fit"
          src={orang}
          alt="Login background"
        />
      </div>
    </div>
  );
}
