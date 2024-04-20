import React from 'react'

interface IDropdown {
  show: boolean,
}

const Dropdown = ({show}: IDropdown) => {
  return (
    <div className={`${show ? "block" : "hidden"} w-48 absolute top-full bg-white border shadow-lg right-0 py-2 rounded-2xl`}>
      <div className='hover:bg-gray-300'>
        <button className='text-sm px-4 py-2'>
          Edit Board
        </button>
      </div>
      <div className='hover:bg-gray-300'>
        <button className='text-sm px-4 py-2'>
          Delete Board
        </button>
      </div>
    </div>
  )
}

export default Dropdown