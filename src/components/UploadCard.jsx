export default function UploadCard({ onFileSelect }) {
    return (
      <div className="w-full max-w-lg p-6 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl shadow-lg text-center">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Upload Your File with QEncrypt</h2>
        <input
          type="file"
          onChange={onFileSelect}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
    );
  }
  