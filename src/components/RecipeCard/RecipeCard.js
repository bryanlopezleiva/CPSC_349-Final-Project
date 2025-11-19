import React from "react";
import "./RecipeCard.css";

export default function RecipeCard({ meal }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{meal.strMeal[0]}</span>
        </div>

        <div className="card-title-group">
          <h5 className="card-title"> {meal.strMeal} </h5>
          <div className="card-date"> Meal ID: {meal.idMeal} </div>
        </div>
      </div>

      {/* this is how we extract the image from the API*/}
      <img className="card-image" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-text">
        Click the recipe to view ingredients and instructions.
      </div>
    </div>
  );
}
