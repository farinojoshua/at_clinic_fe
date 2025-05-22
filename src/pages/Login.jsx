// =====================
// 📁 pages/Login.jsx
// =====================
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo AT.png";
import orang from "../assets/Mbak AT.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://982f-103-132-239-226.ngrok-free.app/api/user/login",
        { email, password },
        {
          headers: { "ngrok-skip-browser-warning": "true" },
        }
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      setError("Email atau password salah", err);
    }
  };

  return (
    <div className='flex h-screen'>
      <div className='w-full max-w-md mx-auto px-8 flex flex-col'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to={"/"}>
            <img alt='Logo' src={logo} className='mx-auto h-30 w-auto' />
          </Link>
          <h2 className='mt-10 text-center text-2xl font-bold tracking-tight text-gray-900'>
            Masuk
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
              />
            </div>

            {error && <p className='text-sm text-red-500'>{error}</p>}

            <div>
              <button
                type='submit'
                className='w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700'
              >
                Masuk
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Belum Mendaftar?{" "}
            <a
              href='/Register'
              className='font-semibold text-blue-600 hover:text-blue-500'
            >
              Daftar
            </a>
          </p>
        </div>
      </div>

      <div className='hidden lg:block lg:w-2/5'>
        <img
          className='h-full w-full object-cover'
          src={orang}
          alt='Login background'
        />
      </div>
    </div>
  );
}
