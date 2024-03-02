import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const RowEditBtn = ({id}) => {
  const [isLoading,setIsLoading] = useState(false)
    const { editDrawer, editDrawerHandler,setEditCourse} = useContext(DataContext);
    const editHandler = async() => {
      setIsLoading(true)
        const res = await fetch(`http://localhost:3000/courses/${id}`)
        const json = await res.json()
        setEditCourse(json)
        setIsLoading(false)
        editDrawerHandler()
    }
  
  return (
    <>
      <button onClick={editHandler} className={`${!isLoading ? '' : 'hidden'} border border-blue-300 text-blue-500 hover:text-white hover:bg-blue-400 duration-150  p-2 rounded-full`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <button
        className={`${isLoading ? '' : 'hidden'} border border-blue-300 text-blue-500 hover:text-white hover:bg-blue-400 duration-150  p-2 rounded-full`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6  animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </>
  );
};

export default RowEditBtn;
