import { useNavigate } from "react-router-dom";

export default function Transcript() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        AI Clinical Transcription
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl mb-3">🗣 Conversation</h2>
          <p className="text-gray-300 mb-2"><b>Doctor:</b> What symptoms are you experiencing?</p>
          <p className="text-gray-300 mb-2"><b>Patient:</b> Fever and sore throat.</p>
          <p className="text-gray-300"><b>Doctor:</b> I’ll prescribe antibiotics.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl mb-3">🧠 AI-Extracted Insights</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Condition: Throat Infection</li>
            <li>Medication: Amoxicillin 500mg</li>
            <li>Dosage: Twice daily</li>
            <li>Advice: Rest & hydration</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/prescription")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full text-lg"
        >
          Generate Digital Prescription
        </button>
      </div>
    </div>
  );
}
