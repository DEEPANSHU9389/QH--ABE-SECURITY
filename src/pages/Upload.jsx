import { useState } from "react";
import UploadCard from "../components/UploadCard";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // 🔐 Encryption & Upload logic here
      console.log("Submitting file:", selectedFile.name);
      alert(`File "${selectedFile.name}" submitted successfully.`);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-4">
      <UploadCard onFileSelect={handleFileSelect} />

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
}

