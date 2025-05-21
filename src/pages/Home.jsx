import KontenAT from "../assets/Konten AT.jpg";
import MbakAT from "../assets/Mbak AT.png";
import EMRAM from "../assets/EMRAM.png";
import GlobalHealth from "../assets/Hospital Group.png";
import Orthopaedic from "../assets/Ortopedi.png";

export default function Home() {
  return (
    <div className='bg-white'>
      {/* Gambar Utama */}
      <section className='w-full'>
        <img
          src={KontenAT}
          alt='Gambar AT Clinic'
          className='w-full h-auto object-cover'
        />
      </section>

      {/* Fasilitas & Layanan Card */}
      <section className='relative z-10 px-4 sm:px-6'>
        <div className='max-w-5xl mx-auto -mt-40 sm:-mt-52 md:-mt-40  bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row items-stretch'>
          {/* Gambar MbakAT */}
          <div className='flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto'>
            <img
              src={MbakAT}
              alt='Dokter AT Clinic'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Teks Fasilitas & Layanan */}
          <div className='flex-1 p-4 sm:p-5 md:p-6'>
            <h2 className='text-lg sm:text-xl font-bold text-blue-600 mb-3'>
              Fasilitas & Layanan
            </h2>
            <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
              Klinik kami menyediakan layanan pemeriksaan umum, konsultasi
              spesialis, poli gigi, poli anak, laboratorium, farmasi, serta
              ruang tunggu nyaman. Didukung tenaga medis profesional dan
              peralatan modern, kami berkomitmen memberikan pelayanan kesehatan
              yang{" "}
              <span className='font-semibold'>
                cepat, ramah, dan berkualitas
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Akreditasi & Penghargaan */}
      <section className='px-6 py-16 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-blue-600 mb-2'>
            Akreditasi & Penghargaan
          </h2>
          <p className='text-gray-600 mb-10 text-sm max-w-3xl mx-auto'>
            Berbagai pencapaian terbaik kami sebagai wujud komitmen untuk selalu
            memberikan pelayanan kesehatan terbaik, mengutamakan keselamatan dan
            kenyamanan Anda.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Card 1 */}
            <div className='bg-blue-50 border border-blue-100 rounded-xl shadow p-5 text-left'>
              <img
                src={EMRAM}
                alt='EMRAM'
                className='h-50 mx-auto mb-4 object-contain'
              />
              <h3 className='font-semibold text-sm mb-1'>
                HIMSS EMRAM Tingkat 6
              </h3>
              <p className='text-xs text-gray-600 leading-relaxed'>
                AT Clinic menjadi klinik pertama di Indonesia yang meraih
                validasi HIMSS EMRAM Tingkat 6. EMRAM adalah sistem yang
                mengukur kematangan digital (digital maturity) klinik di seluruh
                dunia.
              </p>
            </div>

            {/* Card 2 */}
            <div className='bg-blue-50 border border-blue-100 rounded-xl shadow p-5 text-left'>
              <img
                src={GlobalHealth}
                alt='Hospital Group Award'
                className='h-50 mx-auto mb-4 object-contain'
              />
              <h3 className='font-semibold text-sm mb-1'>
                Hospital Group of the Year in Indonesia 2025
              </h3>
              <p className='text-xs text-gray-600 leading-relaxed'>
                Dukungan teknologi medis terdepan, tim dokter dari berbagai
                kompetensi, serta layanan humanis menjadikan kami optimal dalam
                keselamatan dan kenyamanan pasien.
              </p>
            </div>

            {/* Card 3 */}
            <div className='bg-blue-50 border border-blue-100 rounded-xl shadow p-5 text-left'>
              <img
                src={Orthopaedic}
                alt='Orthopaedic Award'
                className='h-50 mx-auto mb-4 object-contain'
              />
              <h3 className='font-semibold text-sm mb-1'>
                Orthopaedic Service Provider of the Year in Indonesia 2025
              </h3>
              <p className='text-xs text-gray-600 leading-relaxed'>
                Dukungan tim dokter ortopedi subspesialis yang lengkap
                memberikan penanganan terbaik bagi pasien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
