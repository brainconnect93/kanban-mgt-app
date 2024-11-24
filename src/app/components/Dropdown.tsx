import { openAddAndEditBoardModal } from '@/components/redux/features/appSlice'
import { useAppDispatch } from '@/components/redux/hooks'

interface IDropdown {
  show: boolean,
}

export default function Dropdown({show}: IDropdown) {

  const dispatch = useAppDispatch();

  return (
    <div className={`${show ? "block" : "hidden"} w-48 absolute top-full bg-white border shadow-lg right-0 py-2 rounded-2xl`}>
      <div className='hover:bg-gray-300'>
        <button 
          onClick={() => dispatch(openAddAndEditBoardModal('Edit Board'))}
          className='text-sm px-4 py-2'>
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