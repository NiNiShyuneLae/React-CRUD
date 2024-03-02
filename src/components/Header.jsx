import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const {drawerHandler} = useContext(DataContext)
  return (
    <div className="flex gap-4 flex-col">
      <div>
        <h1 className="text-3xl font-bold">Heather's Zone</h1>
        <p className="text-gray-400 font-semibold">CRUD Courses</p>
      </div>
      <div>
        <button
        onClick={drawerHandler}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Course
        </button>
      </div>
    </div>
  );
};

export default Header;
