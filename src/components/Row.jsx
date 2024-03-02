import React from "react";
import RowDelBtn from "./RowDelBtn";
import RowEditBtn from "./RowEditBtn";

const Row = ({course:{title,level,fee,id},index}) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index+1}
        </th>
        <td className="px-6 py-4">{title}</td>
        <td className="px-6 py-4">{level}</td>
        <td className="px-6 py-4">{fee}</td>
        <td className="px-6 py-4 flex gap-1">
          <RowEditBtn id={id}/>
          <RowDelBtn id={id}/>
        </td>
      </tr>
    </>
  );
};

export default Row;
