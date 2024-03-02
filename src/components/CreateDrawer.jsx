import React, { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";

const CreateDrawer = () => {
  const { openDrawer, drawerHandler, createCourse, isLoading, setIsLoading } =
    useContext(DataContext);

  const formRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const newCourse = {
      title: formData.get("title"),
      level: formData.get("level"),
      fee: formData.get("fee"),
    };
    setIsLoading(true)
    const res = await fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newCourse),
    });
    const json = await res.json();
    createCourse(json);
    formRef.current.reset()
    if (formData.get("close")) {
      drawerHandler();
    }
    setIsLoading(false);
  };
  return (
    <div
      className={`fixed ${
        openDrawer
          ? "translate-x-0 opacity-100"
          : "translate-x-[500px] opacity-0"
      } duration-200  top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transhtmlForm  bg-white w-80 dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-contact-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        Create Course
      </h5>
      <button
        onClick={drawerHandler}
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form ref={formRef} onSubmit={submitHandler} className="mb-6">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg: N5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="level"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Level
          </label>
          <input
            type="text"
            id="level"
            name="level"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg: Beginner"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="fee"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Fee
          </label>
          <input
            type="number"
            id="fee"
            name="fee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg: 150000"
            required
          />
        </div>
        <div className="flex  items-center justify-between gap-3">
          <div className="flex items-center ">
            <input
              id="default-checkbox"
              type="checkbox"
              name="close"
              defaultValue
              className="w-6 h-6 focus:ring-0  text-blue-600 bg-gray-100 border-gray-300 rounded   dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
            >
              Close after saved
            </label>
          </div>
          <button
            
            type="submit"
            className={`text-white ${
              !isLoading ? "" : "hidden"
            }  bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block`}
          >
            Create
          </button>

          <div
            className={`text-white ${
              isLoading ? "" : "hidden"
            } flex  items-center gap-2 bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span>Loading...</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDrawer;
