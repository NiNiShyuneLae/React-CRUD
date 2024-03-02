import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const EmptyRow = () => {
    const {drawerHandler} = useContext(DataContext)
  return (
    <>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        colSpan={5}
        scope="row"
        className="px-6 py-4  font-medium  text-center text-gray-900 whitespace-nowrap dark:text-white"
      >
        There is no Course Selected yet. <span onClick={drawerHandler} className='underline cursor-pointer'>Create Course</span>
      </th>
   
    </tr>
  </>
  )
}

export default EmptyRow