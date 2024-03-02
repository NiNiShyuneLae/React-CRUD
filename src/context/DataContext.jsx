import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editCourse,setEditCourse] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };
  const editDrawerHandler = () => {
    setEditDrawer(!editDrawer)
  }
  const createCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <DataContext.Provider
      value={{
        openDrawer,
        drawerHandler,
        createCourse,
        courses,
        setCourses,
        isLoading,
        setIsLoading,
        editDrawer,
        setEditDrawer,
        editDrawerHandler,
        setEditCourse,
        editCourse
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
