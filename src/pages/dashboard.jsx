import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          AuraScribe
        </h1>
        <p className="text-gray-400 mt-2">
          AI-Powered Clinical Assistant
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Record Audio */}
        <div
          onClick={() => navigate("/record")}
          className="cursor-pointer bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
        >
          <div className="text-5xl mb-4">🎙</div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Record Consultation
          </h2>
          <p className="text-gray-400">
            Live doctor-patient audio recording
          </p>
        </div>

        {/* Upload Audio */}
        <div
          onClick={() => navigate("/audio")}
          className="cursor-pointer bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
        >
          <div className="text-5xl mb-4">📂</div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Upload Audio
          </h2>
          <p className="text-gray-400">
            Upload recorded consultation files
          </p>
        </div>

        {/* Prescription */}
        <div
          onClick={() => navigate("/prescription")}
          className="cursor-pointer bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
        >
          <div className="text-5xl mb-4">🧾</div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Generate Prescription
          </h2>
          <p className="text-gray-400">
            AI-generated digital prescription
          </p>
        </div>

      </div>
    </div>
  );
}
