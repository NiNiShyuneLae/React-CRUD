import React from "react";

const Skeleton = () => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-5"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5  bg-gray-300 rounded-full dark:bg-gray-700 w-16"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-2.5  bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
        </td>
        <td className="px-6 py-4 flex gap-1">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        </td>
      </tr>
    </>
  );
};

export default Skeleton;
