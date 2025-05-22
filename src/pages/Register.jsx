import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/Logo AT.png";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    birth_date: "",
    gender: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation can be added here
    const result = await register(formData);
    if (result.success) {
      // Registration successful, redirect handled in context
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to="/">
            <img alt='AT Clinic' src={logo} className='mx-auto h-30 w-auto' />
          </Link>
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Daftar Akun
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Name
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  autoComplete='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm/6 font-medium text-gray-900'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='phone_number'
                className='block text-sm font-medium text-gray-900'
              >
                Phone number
              </label>
              <div className='mt-2'>
                <input
                  id='phone_number'
                  name='phone_number'
                  type='text'
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='birth_date'
                className='block text-sm font-medium text-gray-900'
              >
                Tanggal Lahir
              </label>
              <div className='mt-2'>
                <input
                  id='birth_date'
                  name='birth_date'
                  type='date'
                  required
                  value={formData.birth_date}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='gender'
                className='block text-sm font-medium text-gray-900'
              >
                Jenis Kelamin
              </label>
              <div className='mt-2'>
                <select
                  id='gender'
                  name='gender'
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm'
                >
                  <option value=''>Pilih</option>
                  <option value='Male'>Pria</option>
                  <option value='Female'>Wanita</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-900'
              >
                Password
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm'
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Mendaftar
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Sudah Mendaftar{" "}
            <Link to='/login' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
