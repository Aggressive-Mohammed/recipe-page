import React from "react";

const Preparation: React.FC = () => {
  return (
    <div
      className="bg-rose-50 rounded-2xl h-full m-6">
      <h2 className="text-xl text-rose-800 font-bold mx-3 my-4">
        Preparation time
      </h2>
      <ul className="list-disc ml-14 text-base font-customOne font-medium text-stone-600">
        <li className="">
          <strong>Total</strong>: Approximately 10 minutes
        </li>
        <li className="">
          <strong>Preparation</strong>: 5 minutes
        </li>
        <li className="">
          <strong>Cooking</strong>:5 minutes
        </li>
      </ul>
    </div>
  );
};

export default Preparation;
