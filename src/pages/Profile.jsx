import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState({
    nama: "",
    jenisKelamin: "",
    tanggalLahir: new Date(),
    noTelpon: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("/data/profile.json")
      .then((res) => {
        const data = res.data;
        setProfile({
          ...data,
          tanggalLahir: new Date(data.tanggalLahir),
        });
      })
      .catch((err) => {
        console.error("Gagal fetch data profil:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-10">
        Profile
      </h1>

      <div className="bg-white rounded-3xl shadow-xl max-w-4xl mx-auto p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <FaUserCircle className="text-gray-300" size={180} />
        </div>

        {/* Form */}
        <div className="flex-1 space-y-5 w-full">
          {/* Nama */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Nama</label>
            <input
              type="text"
              value={profile.nama}
              onChange={(e) =>
                setProfile({ ...profile, nama: e.target.value })
              }
              className="bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="flex flex-col relative">
            <label className="font-medium mb-1">Jenis Kelamin</label>
            <select
              value={profile.jenisKelamin}
              onChange={(e) =>
                setProfile({ ...profile, jenisKelamin: e.target.value })
              }
              className="bg-blue-50 rounded-md px-4 py-2 text-sm appearance-none focus:outline-none"
            >
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
            <IoMdArrowDropdown className="absolute right-3 top-10 text-gray-500 pointer-events-none" />
          </div>

          {/* Tanggal Lahir */}
          <div className="flex flex-col relative">
            <label className="font-medium mb-1">Tanggal Lahir</label>
            <DatePicker
              selected={profile.tanggalLahir}
              onChange={(date) =>
                setProfile({ ...profile, tanggalLahir: date })
              }
              dateFormat="dd - MM - yyyy"
              className="w-full bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none"
              placeholderText="Pilih tanggal"
            />
            <AiOutlineCalendar className="absolute right-3 top-10 text-blue-500 pointer-events-none" />
          </div>

          {/* Nomor Telpon */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">No. Telpon</label>
            <input
              type="text"
              value={profile.noTelpon}
              onChange={(e) =>
                setProfile({ ...profile, noTelpon: e.target.value })
              }
              className="bg-blue-50 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Email (readonly) */}
          <div className="border-t pt-4">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              value={profile.email}
              readOnly
              className="bg-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 w-full cursor-not-allowed"
            />
          </div>

          {/* Tombol Simpan */}
          <div className="pt-2 text-right">
            <button
              onClick={() => console.log("Data disimpan:", profile)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
