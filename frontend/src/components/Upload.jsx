import { useState } from "react";
import axios from "axios";

export default function Upload() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );

      setResult(response.data);

    } catch (error) {

      console.error(error);
      alert("Upload failed");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="bg-white p-6 rounded-2xl shadow border border-slate-200">

      <h2 className="text-2xl font-bold mb-4 text-slate-800">
        Upload Medical Report
      </h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-xl"
      >
        {loading ? "Analyzing..." : "Analyze Report"}
      </button>

      {result && (

        <div className="mt-6 space-y-4">

          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              Extracted Parameters
            </h3>

            <pre className="text-sm overflow-auto">
              {JSON.stringify(result.results, null, 2)}
            </pre>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="font-bold text-lg mb-2">
              Analysis
            </h3>

            <pre className="text-sm overflow-auto">
              {JSON.stringify(result.analysis, null, 2)}
            </pre>
          </div>

          <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
            <h3 className="font-bold text-lg mb-2">
              Summary
            </h3>

            <p>
              {result.summary}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}