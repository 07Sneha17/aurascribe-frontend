import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Record() {
  const navigate = useNavigate();
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Fake timer for demo
  if (recording) {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl text-center w-[90%] max-w-md border border-gray-700">

        <h1 className="text-3xl font-bold text-white mb-6">
          Audio Recording
        </h1>

        {/* Mic Button */}
        <button
          onClick={() => {
            setRecording(!recording);
            if (!recording) setSeconds(0);
          }}
          className={`w-32 h-32 rounded-full flex items-center justify-center text-5xl transition-all duration-300
          ${recording ? "bg-red-600 animate-pulse" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          🎙
        </button>

        <p className="text-gray-300 mt-6">
          {recording ? "Recording..." : "Click to start recording"}
        </p>

        <p className="text-gray-400 mt-2">
          ⏱ {seconds} sec
        </p>

        {/* STOP & TRANSCRIBE BUTTON */}
        <button
          onClick={() => navigate("/transcript")}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Stop & Transcribe
        </button>

      </div>
    </div>
  );
}
