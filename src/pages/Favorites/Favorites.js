import react from "react";
import { useFavorites } from "../../context/FavoritesContext";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Favorites() {
  const { favorites, toggleFavorites, isFavorited } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {" "}
        My Favorite Recipes{" "}
      </h1>
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg ">
            {" "}
            There are currently no favorite recipes!{" "}
          </p>
          <p className="text-gray-500 text-lg">
            {" "}
            Startadding recipes by clicking the heart icon!{" "}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              onFavorite={toggleFavorites}
              isFavorited={isFavorited(meal.idMeal)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
