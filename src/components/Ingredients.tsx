import React from "react";

const Ingredients: React.FC = () => {
  return (
    <div className="text-stone-600 mx-4 mb-8">
      <h2 className="text-3xl font-extrabold text-brown-800 font-custom mt-6 mb-4">
        Ingredients
      </h2>
      <ul className="list-disc pl-5 font-customOne font-medium text-stone-600">
        <li className="px-5 py-1">2-3 large eggs</li>
        <li className="px-5 py-1">Salt, to taste</li>
        <li className="px-5 py-1">Pepper, to taste</li>
        <li className="px-5 py-1">1 tablespoon of butter or oil</li>
        <li className="px-5 py-1">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
};

export default Ingredients;
