import React from "react";
import Row from "./Row";
import RowGroup from "./RowGroup";
import Skeleton from "./Skeleton";

const Table = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Course title
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
              <th scope="col" className="px-6 py-3">
                Course Fee
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <RowGroup/>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
