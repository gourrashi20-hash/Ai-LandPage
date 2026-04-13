import { useState } from "react";
import "./App.css";
import"./index.css";
function App() {
  const [adInput, setAdInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!adInput || !urlInput) {
      alert("Please fill both fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://ai-landpage-j1q6.onrender.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ad: adInput,
          url: urlInput,
        }),
      });

      const data = await res.text();
      setOutput(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      {/* Heading */}
      <h1 className="heading">AI Landing Page Personalizer</h1>

      {/* Form */}
      <div className="form">
        <textarea
          className="textarea"
          placeholder="Enter Ad Creative (text/link)"
          value={adInput}
          onChange={(e) => setAdInput(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Enter Landing Page URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <button className="button" onClick={handleGenerate}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/*  Output */}
      <div className="outputContainer">
        {output ? (
          <iframe
            className="iframe"
            title="preview"
            srcDoc={output}
          />
        ) : (
          <p className="placeholder">
            Your personalized landing page will appear here
          </p>
        )}
      </div>
    </div>
  );
}

export default App;