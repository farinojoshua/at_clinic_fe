import { useEffect, useState } from "react";
import axios from "axios";
import PoliImage from "../assets/Layanan-poli.png";

export default function Poli() {
  const [poliList, setPoliList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/data/poli.json") // path dari public/data/poli.json
      .then((res) => {
        setPoliList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data poli:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Gambar Header */}
      <section className="w-full">
        <img
          src={PoliImage}
          alt="Ilustrasi Pemeriksaan Poli"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Floating Card Section */}
      <section className="px-4 sm:px-6 -mt-24 sm:-mt-40 md:-mt-56 mb-16 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl px-4 sm:px-6 md:px-12 py-6 sm:py-10 md:py-14">
          {/* Judul & Deskripsi */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-3">
              Layanan Poli
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan poli untuk memenuhi kebutuhan
              pemeriksaan dan konsultasi kesehatan Anda. Ditangani oleh tenaga
              medis profesional, setiap poli dirancang untuk memberikan
              pelayanan yang nyaman, cepat, dan terpercaya.
            </p>
          </div>

          {/* Daftar Poli */}
          {loading ? (
            <p className="text-center text-gray-500">Memuat data...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 px-2">
              {poliList.map((poli) => (         
                <div
                  key={poli.id}
                  className="max-w-[320px] w-full mx-auto text-center text-blue-600 font-medium text-sm sm:text-base py-2.5 px-4 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100/40 transition duration-200 cursor-pointer bg-[radial-gradient(circle_at_top_left,_#e6f0ff,_#d0e6ff,_#f8fbff)]"
                >
                  {poli.nama}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
