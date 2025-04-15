import React from "react";

const Navbar = ({ selectedCuisine, setSelectedCuisine, selectedTag, setSelectedTag }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row gap-4 items-center">
      <h1 className="text-xl font-bold">London Bytes</h1>

      <select
        className="p-2 bg-gray-800 border border-gray-600 rounded"
        value={selectedCuisine}
        onChange={(e) => setSelectedCuisine(e.target.value)}
      >
        <option value="">All Cuisines</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Malaysian">Malaysian</option>
        <option value="Mexican">Mexican</option>
        <option value="Italian">Italian</option> 
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="French">French</option>
        <option value="Taiwanese">Taiwanese</option>
        <option value="Korean">Korean</option>
      </select>

      <select
        className="p-2 bg-gray-800 border border-gray-600 rounded"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        <option value="Budget">Budget</option>
        <option value="Special Occasion">Special Occasion</option>
      </select>
    </nav>
  );
};

export default Navbar;
