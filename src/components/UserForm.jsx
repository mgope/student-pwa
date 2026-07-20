import { useState, useRef } from "react";

function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const recognitionRef = useRef(null);

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();

    // Bengali (Bangladesh)
    recognition.lang = "bn-BD";
    // If you prefer Indian Bengali, use:
    // recognition.lang = "bn-IN";

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setName(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  function submit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    onAdd({
      name,
    });

    setName("");
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="নাম লিখুন"
      />

      <button type="button" onClick={startVoiceInput}>
        🎤 বলুন
      </button>

      <button type="submit">
        যোগ করুন
      </button>
    </form>
  );
}

export default UserForm;