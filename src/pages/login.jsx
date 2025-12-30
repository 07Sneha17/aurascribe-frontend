import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">
          AuraScribe
        </h1>

        <p className="text-gray-600 mb-6">
          AI-powered clinical assistant
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          Login as Doctor
        </button>
      </div>
    </div>
  );
}
