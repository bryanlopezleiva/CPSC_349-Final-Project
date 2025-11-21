import { useState } from "react";
import { seachByIngredient } from "../../api/mealDBService.js";
import RecipeCard from "../../components/RecipeCard/RecipeCard.js";

export default function FindRecipePage() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (ingredients.trim() === "") {
      return;
    }

    try {
      const data = await seachByIngredient(ingredients.trim());
      setRecipes(data.meals || []);
    } catch (err) {
      console.log("API Search Error:", err);
      setRecipes([]);
    }
  };

  return (
    // We keep the main structure and styling consistent
    <div className="min-h-screen pt-24 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Ingredient-Based Recipe Finder 🥩🥕
        </h1>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
        >
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="e.g., chicken, rice, tomato"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Find Recipes
            </button>
          </div>
        </form>

        {/* Results Area */}
        <div className="mt-12">
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {recipes.map((meal) => (
                <RecipeCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          ) : (
            // This message appears if there are no recipes found
            <p className="text-center text-gray-500 mt-8">
              Start your search above to see meal ideas!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
