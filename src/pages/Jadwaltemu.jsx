import drdiffa from '../assets/326.png'; // Pastikan file foto sesuai path
import Calender from './Calender'; // Komponen kalender kamu
import Popup from './Popup'; // Komponen popup 
import { useState } from 'react'

export default function JadwalTemu() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen space-x-10 px-8 w-full">
            {/* Foto Dokter */}
            <div className="flex flex-col items-center w-5/12">
                <div className="rounded-3xl overflow-hidden p-2">
                    <img
                        src={drdiffa}
                        alt="dr. Adhyaksa Diffa M."
                        className="object-cover w-[300px] h-[600px]"
                    />
                </div>
            </div>

            {/* Info Dokter & Kalender */}
            <div className="flex flex-col w-5/12">
                <h1 className="text-2xl font-bold text-sky-600">dr. Adhyaksa Diffa M.</h1>
                <h2 className="text-gray-600 text-bold border-b border-gray-300 mb-4 w-fit">Umum</h2>

                <Calender />

            </div>

            {/* Waktu & Tombol */}
            <div className="flex flex-col justify-between space-y-8 w-2/12">


                {/* Tombol Aksi */}

                <div>
                    <div className="flex justify-between space-x-4">
                        <button className="px-6 py-2 rounded-full bg-gray-100 text-black shadow-sm">
                            Kembali
                        </button>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="px-6 py-2 rounded-full bg-blue-500 text-white shadow-sm hover:bg-blue-600"
                        >
                            Buat Janji
                        </button>
                        
                    </div>

                    {isPopupOpen && <Popup open = { isPopupOpen } setOpen = {setIsPopupOpen} />}
                </div>

            </div>
        </div>
    );
}
