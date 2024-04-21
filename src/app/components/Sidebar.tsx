import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-[18.75rem] flex-none dark:bg-dark-grey h-full py-6 pr-6'>
      <p className='text-medium-grey pl-[2.12rem] text-[.95rem] font-semibold uppercase pb-3'>
        {`All Boards (0)`}
      </p>
      <div className='cursor-pointer flex items-center rounded-tr-full rounded-br-full bg-blue-500 space-x-2 pl-[2.12rem] py-2 pb-2'>
        <p className='text-white text-lg capitalize'>Current board name</p>
      </div>
      <button className='flex items-center space-x-2 pl-[2.12rem] py-3'>
        <p className='text-base font-bold capitalize text-main-purple'>
          + Create New Board
        </p>
      </button>
    </aside>
  )
}

export default Sidebar