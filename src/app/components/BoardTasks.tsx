import React from 'react'

const BoardTasks = () => {
  return (
    <div className='overflow-x-auto overflow-y-auto w-full bg-stone-200'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <p className='text-black text-sm'>
            This board is empty. Create a now column to get started.
          </p>
          <button className='bg-blue-500 text-black px-4 py-2 flex mt-6 rounded-3xl items-center space-x-2'>
            <p>+ Add New Column</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoardTasks