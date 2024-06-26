"use client";
// Tab component for each individual tab
const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={` py-2 pr-6 text-xl ${
        isActive ? "underline underline-offset-4" : "text-gray-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
