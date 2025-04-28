import UploadCard from "../components/UploadCard";

export default function Upload() {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Encrypt and upload file
    }
  };

  return (
    <div>
      <UploadCard onFileSelect={handleFileSelect} />
    </div>
  );
}
