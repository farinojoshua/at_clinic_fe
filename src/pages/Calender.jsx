import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { generateDate, months } from "./util/Calender";
import cn from "./util/Cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar({
  availableDates = [],
  doctorId,
  onSlotSelect,
}) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const dateStr = selectDate.format("YYYY-MM-DD");
    if (availableDates.includes(dateStr)) {
      axios
        .get(
          `https://982f-103-132-239-226.ngrok-free.app/api/doctor/${doctorId}/schedule?date=${dateStr}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        )
        .then((res) => {
          setSlots(res.data.slots || []);
        })
        .catch((err) => {
          console.error("Gagal fetch slot:", err);
          setSlots([]);
        });
    } else {
      setSlots([]);
    }
  }, [selectDate, doctorId]);

  useEffect(() => {
    if (onSlotSelect) {
      const dateStr = selectDate.format("YYYY-MM-DD");
      onSlotSelect({ date: dateStr, time: selectedSlot });
    }
  }, [selectedSlot]);

  return (
    <div className='flex gap-10 sm:divide-x justify-center sm:w-full mx-auto items-center sm:flex-row flex-col'>
      {/* KALENDER */}
      <div className='w-96'>
        <div className='flex justify-between items-center'>
          <h1 className='select-none font-semibold'>
            {months[today.month()]}, {today.year()}
          </h1>
          <div className='flex gap-10 items-center'>
            <GrFormPrevious
              className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className='cursor-pointer hover:scale-105 transition-all'
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>

        <div className='grid grid-cols-7'>
          {days.map((day, index) => (
            <h1
              key={index}
              className='text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none'
            >
              {day}
            </h1>
          ))}
        </div>

        <div className='grid grid-cols-7'>
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => (
              <div
                key={index}
                className='p-2 text-center h-14 grid place-content-center text-sm border-t'
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    availableDates.includes(date.format("YYYY-MM-DD"))
                      ? "border border-green-400"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                    setSelectedSlot(null); // reset slot ketika tanggal berubah
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            )
          )}
        </div>

        <div className='mt-6 space-y-2 text-sm'>
          <div className='flex items-center space-x-2'>
            <span className='w-3 h-3 rounded-full bg-black'></span>
            <span className='text-gray-700'>Terpilih</span>
            <span className='w-3 h-3 rounded-full bg-green-400'></span>
            <span className='text-gray-700'>Tersedia</span>
          </div>
        </div>
      </div>

      {/* SLOT */}
      <div className='h-96 w-96 sm:px-5'>
        <h1 className='font-semibold mb-2'>
          Jadwal untuk {selectDate.format("dddd, DD MMM YYYY")}
        </h1>
        {slots.length === 0 ? (
          <p className='text-gray-400'>Tidak ada jadwal tersedia</p>
        ) : (
          <div className='flex flex-wrap gap-2 mt-2'>
            {slots.map((slot, i) => (
              <button
                key={i}
                onClick={() => slot.available && setSelectedSlot(slot.time)}
                disabled={!slot.available}
                className={`px-3 py-1 rounded-lg text-sm border ${
                  slot.available
                    ? selectedSlot === slot.time
                      ? "bg-blue-500 text-white"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
