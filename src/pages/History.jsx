import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function Riwayat() {
  const [riwayat, setRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://982f-103-132-239-226.ngrok-free.app/api/appointment/mine", {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setRiwayat(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data riwayat:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='min-h-screen bg-white text-gray-800 px-4 py-12'>
      <h1 className='text-3xl font-bold text-blue-500 text-center mb-10'>
        Riwayat
      </h1>

      <div className='max-w-4xl mx-auto space-y-6'>
        {loading ? (
          <p className='text-center text-gray-500'>Memuat data...</p>
        ) : riwayat.length === 0 ? (
          <p className='text-center text-gray-500'>Belum ada riwayat.</p>
        ) : (
          riwayat.map((item, index) => {
            const date = dayjs(item.appointment_time).format("DD-MM-YYYY");
            const time = dayjs(item.appointment_time).format("HH:mm");

            return (
              <div
                key={index}
                className='bg-blue-50 rounded-xl flex justify-between items-center px-6 py-4 shadow-sm'
              >
                {/* Informasi Jadwal */}
                <div>
                  <p className='font-bold text-sm text-gray-800 mb-1'>
                    {item.doctor.specialist}
                  </p>
                  <p className='text-sm text-gray-700 mb-1'>
                    {item.doctor.name}
                  </p>
                  <p className='text-sm text-gray-700'>
                    Tanggal <span className='font-bold text-black'>{date}</span>
                  </p>
                  <p className='text-sm text-gray-700'>
                    Jam <span className='font-bold text-black'>{time}</span>
                  </p>
                  <p className='text-sm text-gray-500 mt-1 italic'>
                    Status: {item.status}
                  </p>
                </div>

                {/* Nomor Antrian */}
                <div className='border-l border-blue-300 pl-6'>
                  <p className='text-blue-600 font-bold text-3xl'>
                    {item.register_no}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
