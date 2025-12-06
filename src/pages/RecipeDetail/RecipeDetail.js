import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealID } from "../../api/mealDBService";

export default function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealID(id).then((data) => {
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
      }
    });
  }, [id]);

  if (!meal) return <p className="p-6 text-lg">Loading...</p>;

  // Build ingredients list
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${measure} ${ing}`);
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg shadow-lg mb-6"
      />

      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside mb-6 leading-7">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="whitespace-pre-line leading-7 text-gray-800">
        {meal.strInstructions}
      </p>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline block mt-6 font-medium"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
}
