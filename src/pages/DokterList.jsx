import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import BgDokter from "../assets/poli-x.jpg";
import DefaultFoto from "../assets/326.png";
import { useNavigate } from "react-router-dom";

export default function DokterList() {
  const [dokterList, setDokterList] = useState([]);
  const [specialistName, setSpecialistName] = useState("");
  const { specialist_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://982f-103-132-239-226.ngrok-free.app/api/doctor?specialist_id=${specialist_id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((res) => {
        setDokterList(res.data.data);
        if (res.data.data.length > 0) {
          setSpecialistName(res.data.data[0].specialist);
        } else {
          setSpecialistName("Tidak Diketahui");
        }
      })
      .catch((err) => {
        console.error("Gagal fetch dokter:", err);
        setSpecialistName("Tidak Diketahui");
      });
  }, [specialist_id]);

  return (
    <div className='bg-white min-h-screen'>
      {/* Background Header */}
      <section className='w-full h-[200px] md:h-[280px] overflow-hidden'>
        <img
          src={BgDokter}
          alt='Background Daftar Dokter'
          className='w-full h-full object-cover'
        />
      </section>

      {/* Card Container */}
      <section className='relative z-10 px-4 pb-16'>
        <div className='max-w-5xl mx-auto -mt-20 md:-mt-24 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-6 py-10 md:py-14'>
          {/* Judul Poli */}
          <div className='text-center mb-10'>
            <h2 className='inline-block bg-white text-2xl font-bold text-blue-600 px-6 py-3 rounded-2xl shadow-md'>
              Poli {specialistName}
            </h2>
          </div>

          {/* Daftar Dokter */}
          <div className='space-y-12'>
            {dokterList.length === 0 ? (
              <p className='text-center text-gray-500 italic'>
                Tidak ada dokter ditemukan untuk spesialis ini.
              </p>
            ) : (
              dokterList.map((dokter, i) => (
                <div
                  key={i}
                  className='bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch transition hover:shadow-2xl'
                >
                  {/* Sisi Foto */}
                  <div className='bg-[#007BFF] w-full md:w-[260px] p-8 flex flex-col items-center justify-center text-white'>
                    <img
                      src={DefaultFoto}
                      alt={dokter.name}
                      className='w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg'
                    />
                    <h3 className='text-lg font-semibold mt-4 text-center'>
                      <span className='text-white font-medium'>dr.</span>{" "}
                      <span className='text-white'>
                        {dokter.name.replace("dr. ", "")}
                      </span>
                    </h3>
                    <p className='text-sm text-white/90 mt-1'>
                      {dokter.specialist}
                    </p>
                  </div>

                  {/* Sisi Jadwal */}
                  <div className='flex-1 p-6 md:p-10 flex flex-col justify-between'>
                    <div>
                      <h4 className='text-blue-600 font-bold text-center md:text-left mb-4 text-base'>
                        Jadwal
                      </h4>
                      {dokter.schedules.length > 0 ? (
                        <div className='overflow-x-auto'>
                          <table className='w-full text-sm text-gray-800 text-center'>
                            <thead>
                              <tr className='font-semibold text-gray-500 border-b'>
                                {dokter.schedules.map((j, idx) => (
                                  <th
                                    key={idx}
                                    className='px-2 py-1 whitespace-nowrap'
                                  >
                                    {j.day}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              <tr className='font-medium'>
                                {dokter.schedules.map((j, idx) => (
                                  <td
                                    key={idx}
                                    className='px-2 py-2 whitespace-nowrap'
                                  >
                                    {j.start_hour.slice(0, 5)} -{" "}
                                    {j.end_hour.slice(0, 5)}
                                  </td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className='text-gray-500 text-sm italic text-center'>
                          Belum ada jadwal tersedia
                        </p>
                      )}
                    </div>
                    <div className='mt-6 text-center md:text-right'>
                      <button
                        onClick={() => navigate(`/jadwaltemu/${dokter.id}`)}
                        className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm rounded-full transition cursor-pointer'
                      >
                        Buat Janji
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
