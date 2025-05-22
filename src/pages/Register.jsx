// =====================
// 📁 pages/Register.jsx
// =====================
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/Logo AT.png";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    birth_date: "",
    phone_number: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://982f-103-132-239-226.ngrok-free.app/api/user/register",
        form,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      navigate("/login");
    } catch (err) {
      setError(
        "Pendaftaran gagal. Pastikan data benar atau email sudah digunakan."
      );
      console.error(err);
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Link to='/'>
          <img alt='AT Clinic' src={logo} className='mx-auto h-30 w-auto' />
        </Link>
        <h2 className='mt-10 text-center text-2xl font-bold tracking-tight text-gray-900'>
          Daftar Akun
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Nama
            </label>
            <input
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder='Nama'
              className='w-full px-3 py-2 border rounded'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              type='email'
              placeholder='Email'
              className='w-full px-3 py-2 border rounded'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              No. Telepon
            </label>
            <input
              name='phone_number'
              value={form.phone_number}
              onChange={handleChange}
              required
              placeholder='No. Telepon'
              className='w-full px-3 py-2 border rounded'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Tanggal Lahir
            </label>
            <input
              name='birth_date'
              value={form.birth_date}
              onChange={handleChange}
              required
              type='date'
              className='w-full px-3 py-2 border rounded'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Jenis Kelamin
            </label>
            <select
              name='gender'
              value={form.gender}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border rounded'
            >
              <option value=''>Pilih Jenis Kelamin</option>
              <option value='male'>Pria</option>
              <option value='female'>Wanita</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              name='password'
              value={form.password}
              onChange={handleChange}
              required
              type='password'
              placeholder='Password'
              className='w-full px-3 py-2 border rounded'
            />
          </div>

          <button
            type='submit'
            className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            Daftar
          </button>
        </form>

        {success && (
          <p className='text-green-600 mt-4 text-sm font-medium'>{success}</p>
        )}
        {error && (
          <p className='text-red-600 mt-4 text-sm font-medium'>{error}</p>
        )}

        <p className='mt-6 text-center text-sm text-gray-500'>
          Sudah punya akun?{" "}
          <Link
            to='/login'
            className='font-semibold text-blue-600 hover:text-blue-500'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
