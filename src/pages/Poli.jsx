import PoliImage from "../assets/Layanan-poli.png"; // Ganti dengan nama file gambar header kamu

export default function Poli() {
  const daftarPoli = [
    "Poli Umum",
    "Poli Gigi",
    "Poli Anak",
    "Poli Kandungan (Obgyn)",
    "Poli Penyakit Dalam",
    "Poli THT",
    "Poli Mata",
    "Poli Saraf",
    "Poli Kulit dan Kelamin",
    "Poli Ortopedi",
    "Poli Gizi",
    "Poli Psikologi",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Gambar */}
      <section className="w-full">
        <img
          src={PoliImage}
          alt="Ilustrasi Pemeriksaan Poli"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Judul & Deskripsi */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
          Layanan Poli
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan poli untuk memenuhi kebutuhan
          pemeriksaan dan konsultasi kesehatan Anda. Ditangani oleh tenaga medis
          profesional, setiap poli dirancang untuk memberikan pelayanan yang
          nyaman, cepat, dan terpercaya.
        </p>
      </section>

      {/* Daftar Poli */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {daftarPoli.map((poli, index) => (
            <div
              key={index}
              className="text-center text-blue-600 font-medium py-4 px-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer bg-[radial-gradient(circle_at_top_left,_#e6f0ff,_#d0e6ff,_#f8fbff)]"
            >
              {poli}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
