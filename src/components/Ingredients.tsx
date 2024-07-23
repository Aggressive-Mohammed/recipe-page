import React from 'react'

const Ingredients:React.FC=() => {
  return (
    <div className='m-8 text-stone-600 w-screen'>
        <h2 className='text-3xl text-brown-800 font-medium font-custom my-6'>Ingredients</h2>
        <ul className='list-disc pl-5  font-customOne text-lg font-medium text-stone-600'>
          <li className='px-4 py-1'>2-3 large eggs</li>
          <li className='px-4 py-1'>Salt, to taste</li>
          <li className='px-4 py-1'>Pepper, to taste</li>
          <li className='px-4 py-1'>1 tablespoon of butter or oil</li>
          <li className='px-4 py-1'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
  )
}

export default Ingredients