import logo from "../assets/Logo AT.png";
export default function Register() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img alt='AT Clinic' src={logo} className='mx-auto h-30 w-auto' />
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Daftar Akun
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form action='#' method='POST' className='space-y-6'>
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
                  type='name'
                  required
                  autoComplete='name'
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
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <label
                for='phone-input'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Phone number:
              </label>
              <div class='relative'>
                <div class='absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 19 18'
                  >
                    <path d='M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z' />
                  </svg>
                </div>
                <input
                  type='text'
                  id='phone-input'
                  aria-describedby='helper-text-explanation'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  placeholder='123-456-7890'
                  required
                />
              </div>
              <p
                id='helper-text-explanation'
                class='mt-2 text-sm text-gray-500'
              >
                Isi nomor telepon
              </p>
            </div>

            <div class='relative max-w-sm'>
              <label
                for='phone-input'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Tanggal Lahir
              </label>
              <input
                datepicker
                id='default-datepicker'
                type='date'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500'
                placeholder='02/25/2025'
              />
            </div>

            <form class='max-w-sm mx-auto'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Jenis Kelamin
              </label>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500'
              >
                <option selected>Pilih</option>
                <option value='pria'>Pria</option>
                <option value='wanita'>Wanita</option>
              </select>
            </form>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  autoComplete='current-password'
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Mendaftar
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Sudah Mendaftar{" "}
            <button>
              <a
                href='/Login'
                className='font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Login
              </a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
