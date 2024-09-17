import React from "react";
import "./App.css";
import imageOmile from "./assets/image-omelette.jpeg";

const App: React.FC = () => {
  return (
    <div className="desktop:space-y-5 max-w-screen-mobile mobile:mx-auto desktop:max-w-screen-desktop desktop:px-[22rem] desktop:bg-stone-100">
      <main className="space-x-6 desktop:px-10 bg-white rounded-3xl desktop:p-10">
        <div className="desktop:h-2/4 w-full">
          <img
            className=" desktop:rounded-2xl"
            src={imageOmile}
            alt="recipe imared-600ge"
          />
        </div>
        <section className="my-10 space-x-2 desktop:w-full desktop:space-x-0 desktop:my-[2.5rem]">
          <h1 className="leading-[2.3rem] ml-2 desktop:ml-0 text-4xl font-bold desktop:font-custom  desktop:tracking-[2.2px] font-custom desktop:font-extrabold mobile:leading-[2.3rem]">
            Simple Omelette Recipe
          </h1>
          <p className="my-[1.4rem] w-11/12 pr-2 font-customOne desktop:my-6 desktop:font-medium">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className="my-8 desktop:my-14 desktop:mx-7">
          <h2 className="mx-8 pt-3 text-xl font-semibold desktop:text-xl text-rose-900 desktop:font-semibold font-customOne">
            Preparation time
          </h2>
          <ul className="mx-14 space-y-2 desktop:pl-8 list-disc font-customOne desktop:space-y-2 text-stone-600 desktop:mx-6 desktop:font-medium">
            <li className="px-4 pt-[.8rem] desktop:px-4 desktop:pt-3">
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li className=" desktop:px-4 px-4">
              <b>Preparation</b>: 5 minutes
            </li>
            <li className="desktop:px-4 px-4">
              <b>Cooking</b>: 5 minutes
            </li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-3xl pt-5 mx-2 mt-4 desktop:px-2 desktop:my-4 font-medium text-brown-800 font-custom tracking-[-1.2px]">
            Ingredients
          </h2>
          <ul className="mx-4 pl-4 pt-3  list-disc desktop:pl-8 desktop:mx-6 desktop:my-3 font-customOne">
            <li className="pl-4 pt-2">2-3 large eggs</li>
            <li className="pl-4 pt-2">Salt, to taste</li>
            <li className="pl-4 pt-2">Pepper, to taste</li>
            <li className="pl-4 pt-2">1 tablespoon of butter or oil</li>
            <li className="pl-4 pt-2">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <hr className="my-6 desktop:mt-8 desktop:mb-7 " />
        <section className="">
          <h2 className="my-4 pt-[.2rem] mx-2 text-3xl desktop:text-3xl text-brown-800 font-medium font-custom tracking-[-1.2px] desktop:mb-5">
            Instructions
          </h2>
          <ol className="mx-8 list-decimal font-customOne desktop:pl-[1.3rem]">
            <li className="pl-4 pt-1 pb-2 desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="pl-4 pb-2  desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Heat the pan</b>: Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li className="pl-4 pb-2 desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Cook the omelette</b>: Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li className="pl-4 pb-2 desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Add fillings (optional)</b>: When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li className="pl-4 pb-2  desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Fold and serve</b>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li className="pl-4  desktop:w-full desktop:pl-4 desktop:pt-2">
              <b>Enjoy</b>: Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>
        <hr className="desktop:my-5" />


        <section className="my-8 desktop:my-10">
          <h2 className="pt-[1.6rem] pl-2 desktop:my-4 text-3xl text-brown-800 font-medium font-custom tracking-[-1.2px]">
            Nutrition
          </h2>
          <p className="mt-4 pl-2 pr-8 w-full pt-1 desktop:w-full desktop:text-lg desktop:mx-2 desktop:font-medium font-customOne ">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="table-auto w-4/5 mt-3 ml-6 font-customOne">
            <tbody className="divide-y-2 text-stone-600 font-semibold">
              <tr>
                <td className="py-3 pl-4 desktop:pr-4">Calories</td>
                <td className="py-3 pr-4 text-brown-800 ">277kcal</td>
              </tr>
              <tr>
                <td className="py-3 pl-4 desktop:pr-4">Carbs</td>
                <td className="py-3 pr-4 text-brown-800 ">0g</td>
              </tr>
              <tr>
                <td className="py-2 pl-4  desktop:pr-4">Protein</td>
                <td className="py-2 text-brown-800 ">20g</td>
              </tr>
              <tr>
                <td className="py-3 pl-4 desktop:pr-4">Fat</td>
                <td className="py-3 text-brown-800">22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};
export default App;
