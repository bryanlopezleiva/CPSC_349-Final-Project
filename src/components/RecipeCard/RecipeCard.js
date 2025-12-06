import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ meal, onFavorite, isFavorited }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipe/${meal.idMeal}`)}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          {/* Profile circle */}
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
            {meal.strMeal[0]}
          </div>

          <div>
            <h5 className="text-lg font-semibold text-gray-800">
              {meal.strMeal}
            </h5>
            <div className="text-sm text-gray-500">Meal ID: {meal.idMeal}</div>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(meal);
          }}
          className="p-2 rounded-full hover:bg-gray-100 transition-all"
          aria-label={
            isFavorited ? "Remove from favorites" : "Add to favorites"
          }
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors"
          >
            <path
              fill={isFavorited ? "#ef4444" : "#d1d5db"}
              strokeWidth="0.2"
              strokeLinejoin="round"
              d="M 52.2716,27.8072C 48.9356,24.164 42.0671,25.7204 38.0992,31.3618C 33.0737,25.3024 27.0713,24.164 23.7257,27.8072C 14.4142,37.9485 34.3451,52.5246 37.9599,54.1634L 38.0438,54.2109L 38.0438,54.1634C 41.6554,52.5246 61.5832,37.9485 52.2716,27.8072 Z"
            />
          </svg>
        </button>
      </div>

      <img
        className="w-full h-48 object-cover"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div className="p-4 text-gray-700 text-sm">
        Click the recipe to view ingredients and instructions.
      </div>
    </div>
  );
}
