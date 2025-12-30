import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="bg-gray-900/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center border border-gray-700">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          AuraScribe
        </h1>

        <p className="text-gray-300 mb-8">
          AI-powered medical transcription & prescription assistant
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:scale-105"
        >
          Login as Doctor
        </button>

      </div>
    </div>
  );
}
