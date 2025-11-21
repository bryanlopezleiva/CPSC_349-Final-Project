import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IngredientSearch from "../src/pages/FindRecipes/IngredientSearch";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<IngredientSearch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
