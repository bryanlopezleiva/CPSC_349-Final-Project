import { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = window.favoritesData || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    window.favoritesData = favorites;
  }, [favorites]);

  const addFavorite = (meal) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.idMeal === meal.idMeal)) {
        return prev;
      }
      return [...prev, meal];
    });
  };

  const removeFavorite = (mealId) => {
    setFavorites((prev) => prev.filter((fav) => fav.idMeal !== mealId));
  };

  const toggleFavorite = (meal) => {
    if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal);
    }
  };

  const isFavorited = (mealId) => {
    return favorites.some((fav) => fav.idMeal === mealId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorited,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
