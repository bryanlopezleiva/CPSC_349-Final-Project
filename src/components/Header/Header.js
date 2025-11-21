import { Link } from "react-router-dom";

export default function Header() {
  return (
    // Header Container: Fixed at the top, full width, padded, and a subtle shadow
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Project Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700 hover:text-green-900 transition duration-150"
        >
          Yummy Recipes
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {/* Link to Feature 1: Ingredient/Recipe Search */}
          <Link
            to="/"
            className="text-gray-600 hover:text-green-600 font-medium transition duration-150"
          >
            Recipe Search
          </Link>

          {/* Link to Feature 2: Favorites */}
          <Link
            to="/favorites"
            className="text-gray-600 hover:text-green-600 font-medium transition duration-150"
          >
            Favorites
          </Link>

          {/* Link to Feature 3: I'm Hungry Button/Random */}
          <Link
            to="/hungry"
            className="text-white bg-amber-500 px-4 py-1 rounded-full font-semibold hover:bg-amber-600 transition duration-150"
          >
            I'm Hungry
          </Link>
        </nav>
      </div>
    </header>
  );
}
