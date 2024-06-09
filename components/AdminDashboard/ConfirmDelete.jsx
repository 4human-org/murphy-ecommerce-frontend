"use client";

export default function ConfirmDelete({ show, message, onConfirm, onCancel }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-white p-4 shadow-lg">
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="rounded bg-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-500"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
