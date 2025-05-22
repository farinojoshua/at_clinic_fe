import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    gender: "",
    birth_date: new Date(),
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://982f-103-132-239-226.ngrok-free.app/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        const data = res.data.data;
        setProfile({
          name: data.name,
          gender: data.gender === "male" ? "Laki-laki" : "Perempuan",
          birth_date: new Date(data.birth_date),
          phone_number: data.phone_number,
          email: data.email,
        });
      })
      .catch((err) => {
        console.error("Gagal fetch data profil:", err);
      });
  }, []);

  const handleSave = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        "https://982f-103-132-239-226.ngrok-free.app/api/user/me",
        {
          name: profile.name,
          gender: profile.gender === "Laki-laki" ? "male" : "female",
          birth_date: profile.birth_date,
          phone_number: profile.phone_number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then(() => alert("Profil berhasil diperbarui"))
      .catch((err) => console.error("Gagal update profil:", err));
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4'>
      <h1 className='text-center text-3xl font-bold text-blue-600 mb-10'>
        Profile
      </h1>

      <div className='bg-white rounded-3xl shadow-xl max-w-4xl mx-auto p-6 md:p-10 flex flex-col md:flex-row items-center gap-8'>
        {/* Avatar */}
        <div className='flex-shrink-0'>
          <FaUserCircle className='text-gray-300' size={180} />
        </div>

        {/* Form */}
        <div className='flex-1 space-y-5 w-full'>
          {/* Nama */}
          <div className='flex flex-col'>
            <label className='font-medium mb-1'>Nama</label>
            <input
              type='text'
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className='bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none'
            />
          </div>

          {/* Jenis Kelamin */}
          <div className='flex flex-col relative'>
            <label className='font-medium mb-1'>Jenis Kelamin</label>
            <select
              value={profile.gender}
              onChange={(e) =>
                setProfile({ ...profile, gender: e.target.value })
              }
              className='bg-blue-50 rounded-md px-4 py-2 text-sm appearance-none focus:outline-none'
            >
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
            <IoMdArrowDropdown className='absolute right-3 top-10 text-gray-500 pointer-events-none' />
          </div>

          {/* Tanggal Lahir */}
          <div className='flex flex-col relative'>
            <label className='font-medium mb-1'>Tanggal Lahir</label>
            <DatePicker
              selected={profile.birth_date}
              onChange={(date) => setProfile({ ...profile, birth_date: date })}
              dateFormat='dd - MM - yyyy'
              className='w-full bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none'
              placeholderText='Pilih tanggal'
            />
            <AiOutlineCalendar className='absolute right-3 top-10 text-blue-500 pointer-events-none' />
          </div>

          {/* Nomor Telpon */}
          <div className='flex flex-col'>
            <label className='font-medium mb-1'>No. Telpon</label>
            <input
              type='text'
              value={profile.phone_number}
              onChange={(e) =>
                setProfile({ ...profile, phone_number: e.target.value })
              }
              className='bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none'
            />
          </div>

          {/* Email (readonly) */}
          <div className='border-t pt-4'>
            <label className='font-medium mb-1'>Email</label>
            <input
              type='email'
              value={profile.email}
              readOnly
              className='bg-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 w-full cursor-not-allowed'
            />
          </div>

          {/* Tombol Simpan */}
          <div className='pt-2 text-right'>
            <button
              onClick={handleSave}
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm'
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
