import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Calender from "./Calender";
import DefaultFoto from "../assets/326.png";
import { isLoggedIn } from "../utils/auth";

export default function JadwalTemu() {
  const { doctor_id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get(
        `https://982f-103-132-239-226.ngrok-free.app/api/doctor/${doctor_id}/available-days`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((res) => {
        setDoctor(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch data jadwal:", err);
        setLoading(false);
      });
  }, [doctor_id]);

  const handleSlotSelect = ({ date, time }) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .post(
        "https://982f-103-132-239-226.ngrok-free.app/api/appointment",
        {
          doctor_id,
          date: selectedDate,
          time: selectedTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setSuccessMessage("Berhasil membuat janji temu!");
        setSelectedDate(null);
        setSelectedTime(null);
        setTimeout(() => navigate("/history"), 2000);
      })
      .catch((err) => {
        setErrorMessage("Gagal membuat janji. Silakan coba lagi.");
        console.error(err);
      });
  };

  if (loading) {
    return (
      <p className='text-center text-gray-500 py-10'>Memuat data dokter...</p>
    );
  }

  if (!doctor) {
    return (
      <p className='text-center text-red-500 py-10'>
        Gagal menampilkan data dokter
      </p>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen space-y-6 lg:space-y-0 lg:space-x-10 px-4 md:px-8 w-full'>
      <div className='flex flex-col items-center w-full lg:w-5/12'>
        <div className='rounded-3xl overflow-hidden p-2'>
          <img
            src={DefaultFoto}
            alt={doctor.name}
            className='object-cover w-[200px] h-[400px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[600px]'
          />
        </div>
      </div>

      <div className='flex flex-col w-full lg:w-5/12'>
        <h1 className='text-xl md:text-2xl font-bold text-sky-600 text-center lg:text-left'>
          {doctor.name}
        </h1>
        <h2 className='text-gray-600 font-semibold border-b border-gray-300 mb-4 w-fit mx-auto lg:mx-0'>
          {doctor.specialist}
        </h2>
        <Calender
          availableDates={doctor.available_dates}
          doctorId={doctor_id}
          onSlotSelect={handleSlotSelect}
        />
        {successMessage && (
          <div className='mt-4 flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-md text-sm shadow-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-green-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className='mt-4 flex items-center gap-2 bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-md text-sm shadow-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-red-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      <div className='flex flex-col w-full lg:w-2/12 items-center mb-10'>
        <div className='flex justify-center lg:justify-between space-x-4 mt-6 lg:mt-0'>
          <button
            onClick={() => navigate(-1)}
            className='px-6 py-2 rounded-full bg-gray-100 text-black shadow-sm'
          >
            Kembali
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedDate || !selectedTime}
            className={`px-6 py-2 rounded-full shadow-sm ${
              selectedDate && selectedTime
                ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Buat Janji
          </button>
        </div>
      </div>
    </div>
  );
}
