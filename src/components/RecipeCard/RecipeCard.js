import React from "react";

export default function RecipeCard({ meal }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        {/* Profile circle with first letter */}
        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
          {meal.strMeal[0]}
        </div>

        {/* Title and ID */}
        <div>
          <h5 className="text-lg font-semibold text-gray-800">
            {meal.strMeal}
          </h5>
          <div className="text-sm text-gray-500">Meal ID: {meal.idMeal}</div>
        </div>
      </div>

      {/* Meal Image */}
      <img
        className="w-full h-48 object-cover"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      {/* Description / Text */}
      <div className="p-4 text-gray-700 text-sm">
        Click the recipe to view ingredients and instructions.
      </div>
    </div>
  );
}
