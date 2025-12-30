import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AudioInput() {
  const [audioFile, setAudioFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-10 w-[90%] max-w-lg shadow-2xl text-center">

        <h1 className="text-3xl font-bold text-white mb-4">
          Upload Consultation Audio
        </h1>

        <p className="text-gray-400 mb-6">
          Upload doctor–patient conversation (.mp3)
        </p>

        {/* Audio File Input */}
        <input
          type="file"
          accept=".mp3"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700 cursor-pointer mb-6"
        />

        {/* Audio Preview */}
        {audioFile && (
          <audio
            controls
            src={audioFile}
            className="w-full mb-6"
          />
        )}

        {/* Action Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/prescription")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
          >
            Process Audio
          </button>
        </div>

      </div>
    </div>
  );
}
