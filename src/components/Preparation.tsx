import React from 'react';

const Preparation: React.FC = () => {
  return (
    <div className='bg-rose-50 p-6 m-8 rounded-2xl w-full'>
        <h2 className='text-xl text-rose-800 font-bold pb-1'>Preparation time</h2>
        <ul className='list-disc pl-5  text-lg font-customOne font-medium text-stone-600'>
          <li className='px-4 py-1'><strong>Total</strong>: Approximately 10 minutes</li>
          <li className='px-4 py-1'><strong>Preparation</strong>: 5 minutes</li>
          <li className='px-4 py-1'><strong>Cooking</strong>: 5 minutes</li>
        </ul>
      </div>
  );
};

export default Preparation;
