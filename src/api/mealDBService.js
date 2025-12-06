// this is how we can search by ingredient Filter by main ingredient
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
//
// we forgot the https:// LOL

export const seachByIngredient = async (ingredient) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
  return res.json();
};

export const searchByName = async (name) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
  );
  return res.json();
};

export const randomMeal = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  return res.json();
};

/// to display the instructions and rest of ingredients for a meal from it's meal id
export const getMealID = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  return res.json();
};
