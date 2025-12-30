import React, { useState } from "react";
import "./App.css";

function App() {
  // ===== CORE STATES =====
  const [audioFile, setAudioFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfBase64, setPdfBase64] = useState(null);
  const [error, setError] = useState(null);

  // ===== UI STATES =====
  const [theme, setTheme] = useState("light");
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // ===== CONTACT FORM STATE =====
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ===== AUDIO → BACKEND =====
  const handleGenerate = async () => {
    if (!audioFile) {
      setError("Please upload the audio recording first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPdfBase64(null);

    const formData = new FormData();
    formData.append("file", audioFile);

    try {
      const response = await fetch("http://10.98.146.101:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to analyze");

      setPdfBase64(data.pdf_base64);
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ===== PDF DOWNLOAD =====
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `data:application/pdf;base64,${pdfBase64}`;
    link.download = `Prescription_${Date.now()}.pdf`;
    link.click();
  };

  const handleReset = () => {
    setAudioFile(null);
    setPdfBase64(null);
    setError(null);
  };

  // ===== WHATSAPP CONTACT (FINAL) =====
  const submitContact = () => {
    const { name, email, phone, message } = contact;

    if (!name || !phone || !message) {
      alert("Please fill Name, Phone and Message");
      return;
    }

    const whatsappMessage = `
Hello AuraScribe Team 👋

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappNumber = "917559267689"; // 👈 REPLACE WITH YOUR NUMBER

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={`app ${theme}`}>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <h2>🩺 AuraScribe</h2>
        <div className="nav-actions">
          <button onClick={() => setShowAbout(true)}>About Us</button>
          <button onClick={() => setShowContact(true)}>Contact Us</button>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>

      {/* ===== HEADER ===== */}
      <header className="header">
        <h1>AI Prescription Generator</h1>
        <p>Clinical Scribing • AI Processing • PDF Output</p>
      </header>

      {/* ===== MAIN ===== */}
      <main className="container">
        {!pdfBase64 && (
          <div className="card">
            <label>Upload Consultation Audio</label>
            <p className="muted">Supported formats: mp3, wav, m4a</p>

            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files[0])}
            />

            <button
              className="primary-btn"
              onClick={handleGenerate}
              disabled={isLoading || !audioFile}
            >
              {isLoading ? "Generating..." : "Generate Prescription"}
            </button>

            {error && <p className="error">⚠ {error}</p>}
          </div>
        )}

        {pdfBase64 && (
          <div className="card success">
            <div className="icon">✅</div>
            <h2>Prescription Ready</h2>

            <button className="success-btn" onClick={downloadPDF}>
              Download PDF
            </button>

            <button className="link-btn" onClick={handleReset}>
              Create New
            </button>
          </div>
        )}
      </main>

      {/* ===== ABOUT MODAL ===== */}
      {showAbout && (
        <div className="modal-backdrop" onClick={() => setShowAbout(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>About AuraScribe</h2>
            <p>
              AuraScribe is an AI-powered clinical assistant that converts
              doctor–patient conversations into structured digital
              prescriptions, reducing documentation time and errors.
            </p>
            <button onClick={() => setShowAbout(false)}>Close</button>
          </div>
        </div>
      )}

      {/* ===== CONTACT MODAL (WHATSAPP) ===== */}
      {showContact && (
        <div className="modal-backdrop" onClick={() => setShowContact(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Us</h2>

            <input
              placeholder="Your Name"
              onChange={(e) =>
                setContact({ ...contact, name: e.target.value })
              }
            />
            <input
              placeholder="Email (optional)"
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
            <input
              placeholder="Phone Number"
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            />
            <textarea
              placeholder="Message"
              rows="4"
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
            ></textarea>

            <button className="primary-btn" onClick={submitContact}>
              💬 Chat on WhatsApp
            </button>

            <button className="link-btn" onClick={() => setShowContact(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
