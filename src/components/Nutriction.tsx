import React from 'react'

const Nutriction: React.FC = () => {
  return (
    <div className='m-10 text-stone-600 w-sreen'>
      <h2 className='text-3xl text-brown-800  font-medium font-custom my-6'>Nutrition</h2>
      <p className=' font-customOne font-semibold text-lg my-6'>The table below shows nutritional values per serving without the additional fillings.</p>

      <table className='font-customOne w-4/5 mx-8'>
        <tbody className='divide-y'>
          <tr>
            <th className='text-stone-600 flex flex-row'>Calories</th>
            <td className='text-brown-800 font-extrabold justify-between'>277kcal</td>
          </tr>
          <tr className='m-7'>
            <th className='text-stone-600 flex'>Carbs</th>
            <td className='text-brown-800 font-extrabold justify-between p-2'>0g</td>
          </tr>
          <tr>
            <th className='text-stone-600 flex'>Protein</th>
            <td className='text-brown-800 font-extrabold justify-between p-2'>20g</td>
          </tr>
          <tr>
            <th className='text-stone-600 flex'>Fat</th>
            <td className='text-brown-800 font-extrabold justify-between p-2'>22g</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default Nutriction