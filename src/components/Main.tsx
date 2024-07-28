import React from "react";

const Main: React.FC = () => {
  return (
    <div className="ml-8 mb-8 mt-[40px]">
      <header className="text-stone-900">
        <h1 className="text-4xl font-custom font-medium mb-6 leading-9">
          Simple Omelette Recipe
        </h1>
      </header>
      <p className="text-stone-600 tracking-normal">
        An easy and quick dish, perfect for any <br></br> meal. This classic
        omelette combines beaten eggs cooked to perfection, optionally filled{" "}
        <br></br> with your choice of cheese, vegitables, or <br></br> meats.
      </p>
    </div>
  );
};

export default Main;
