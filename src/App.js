import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import IngredientSearch from "./components/IngredientSearch/IngredientSearch";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <header className="header">
          <nav>
            <Link to="/">Ingredient Search</Link>
            <Link to="/random">I'm Hungry</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<IngredientSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
