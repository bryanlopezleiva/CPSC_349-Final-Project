import { useState, useEffect } from "react";
import { randomMeal } from "../../api/mealDBService.js";
import { useFavorites } from "../../context/FavoritesContext.js";
import RecipeCard from "../../components/RecipeCard/RecipeCard.js";
import HungryButtonOption from "../../components/HungryButtonOption/HungryButtonOption.js";

export default function HungryPage() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toggleFavorite, isFavorited } = useFavorites();

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const data = await randomMeal();
      setRecipe(data.meals ? data.meals[0] : null);
    } catch (err) {
      console.log("Random Meal Error:", err);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  // Load a random meal when the page first loads
  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Feeling Hungry? 🍽️
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Let us surprise you with a random delicious recipe!
        </p>

        {/* Button to get another random meal */}
        <div className="text-center mb-12">
          <HungryButtonOption onClick={fetchRandomMeal} loading={loading} />
        </div>

        {/* Display the random recipe */}
        <div className="max-w-md mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">
              Finding something delicious...
            </p>
          ) : recipe ? (
            <RecipeCard
              meal={recipe}
              onFavorite={toggleFavorite}
              isFavorited={isFavorited(recipe.idMeal)}
            />
          ) : (
            <p className="text-center text-gray-500">
              Oops! Couldn't find a recipe. Try again!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
