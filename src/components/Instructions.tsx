import React from 'react'

const Instructions:React.FC = () => {
  return (
    <div  className='m-6 text-stone-600 w-full'>
        <h2 className='text-3xl text-brown-800 font-medium font-custom my-6'>Instructions</h2>
        <ol className='list-decimal pl-5 font-customOne text-lg font-medium text-stone-600'>
          <li className='px-4 py-1'>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className='px-4 py-1'> Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li className='px-4 py-1'>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li className='px-4 py-1'>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li className='px-4 py-1'> Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li className='px-4 py-1'>Enjoy: Serve hot, with additional salt and pepper if needed</li>
        </ol>
      </div>
  )
}

export default Instructions