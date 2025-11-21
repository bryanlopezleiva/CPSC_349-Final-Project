import React from "react";
// Since we are using Tailwind, you no longer need to import "./Footer.css"

const Footer = () => {
  return (
    // Footer Container: Not fixed, full width, and uses a light background color
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
        {/* Project Name/Branding */}
        <p className="text-xl font-bold text-green-700 mb-2 sm:mb-0">
          Yummy Recipes{" "}
        </p>

        {/* Copyright Information */}
        <aside className="text-gray-600 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Yummy Recipes
          </p>
        </aside>

        {/* Optional: Navigation/Social Links can go here */}
        {/* For now, we'll keep it simple and consistent with the header's minimal structure */}
        <div className="flex space-x-4 mt-2 sm:mt-0">
          {/* Example of a consistent link style if you add one later */}
          {/* <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Contact</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
