import React from 'react';
// import imageOmile from '../assets/image-omelette.jpeg';

const Main: React.FC = () => {
  return (
    <div className='m-8 px-5 w-screen'>
      {/* <img src={imageOmile} alt="Omelette" className='' /> */}
      <header className='my-4'>
        <h1 className='text-4xl font-custom font-bold'>Simple Omelette Recipe</h1>
      </header>
      <p className='font-outfit font-bold text-stone-600 my-6'>
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};

export default Main;
