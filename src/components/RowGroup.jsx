import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import Row from "./Row";
import Skeleton from "./Skeleton";
import EmptyRow from "./EmptyRow";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);
  const [ready, setReady] = useState(false);
  const skeletonRow = Array.from({ length: 5 }, (_, index) => index);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:3000/courses");
      const data = await res.json();
      setCourses(data);
      setReady(true);
    };
    fetchCourses();
  }, [courses]);
  return (
    <>
      {!ready && skeletonRow?.map((_, index) => <Skeleton key={index} />)}
      {ready &&
        (courses.length ? (
          courses.map((course,index) => <Row index={index} key={course.id} course={course}/>)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;
