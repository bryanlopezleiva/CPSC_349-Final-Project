import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IngredientSearch from "./pages/FindRecipes/IngredientSearch";
import Favorites from "./pages/Favorites/Favorites";
import HungryPage from "./pages/HungryButton/HungryButton";
import "./App.css";

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<IngredientSearch />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/hungry" element={<HungryPage />} />{" "}
              {/* ← Add this route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
}
