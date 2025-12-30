export default function Prescription() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">
      <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-xl w-full">

        <h1 className="text-3xl font-bold text-center mb-6">
          Digital Prescription
        </h1>

        <p><b>Patient:</b> John Doe</p>
        <p><b>Diagnosis:</b> Throat Infection</p>

        <hr className="my-4" />

        <h2 className="text-xl font-semibold">Medications</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Amoxicillin 500mg – 5 days</li>
          <li>Paracetamol – If fever</li>
        </ul>

        <h2 className="text-xl font-semibold">Doctor’s Advice</h2>
        <p>Warm fluids, rest, avoid cold food.</p>

        <div className="text-right mt-6">
          <p className="font-bold">Dr. Sneha Singh</p>
          <p>MBBS</p>
        </div>

      </div>
    </div>
  );
}
