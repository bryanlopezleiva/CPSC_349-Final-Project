import React from "react";

export default function HungryButtonOption({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "🔍 Finding..." : "🍽️ Show Me Another Recipe!"}
    </button>
  );
}
