import { useState } from "react";
import { seachByIngredient } from "../../api";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function IngredientSearch() {
  const [name, setName] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!name) return;
    const data = await seachByIngredient(name);
    setRecipes(data.meals || []);
  };

  return (
    <div>
      <h2> Searching for a recipe </h2>
      <input
        placeholder="e.g. chicken"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="recipe-grid">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
