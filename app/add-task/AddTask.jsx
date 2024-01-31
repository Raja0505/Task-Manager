"use client";
import React from "react";
import Task from "../../assets/Add-task.svg";
import Image from "next/image";
import { useState } from "react";
import { Addtask } from "@/services/TaskService";
import { toast } from "react-toastify";

const pageTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "658d803e13e5a99e5112cafe",
  });

  const handleAddtask = async (event) => {
    event.preventDefault();
    try {
      const result = await Addtask(task);
      toast.success("your Task is Added", { position: "top-center" });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task Not Added", { position: "top-center" });
    }
  };

  return (
    <>
      <div className="   grid grid-cols-12  ">
        <div className=" col-span-4 col-start-5 p-4 shadow-2xl shadow-slate-500 ">
          <div className="flex justify-center">
            <Image src={Task} style={{ width: "50%" }} alt="image" />
          </div>
          <h1 className="text-3xl text-white text-center ">Add-Task</h1>
          <form action="#!" onSubmit={handleAddtask}>
            <div className="mt-4">
              {/*𝗧𝗮𝘀𝗸-𝗰𝗼𝗻𝘁𝗲𝗻𝘁*/}
              <label className="block font-medium text-sm mb-3 text-gray-300 dark:text-white">
                Title
              </label>
              <input
                value={task.title}
                onChange={(event) =>
                  setTask({ ...task, title: event.target.value })
                }
                type="text"
                id="title"
                placeholder="Title"
                className="bg-gray-700 border  border-none outline-none focus: ring-gray-500 text-white text-sm rounded  w-full p-2.5"
              />
            </div>

            <div className="mt-4">
              {/*𝗧𝗮𝘀𝗸-𝗰𝗼𝗻𝘁𝗲𝗻𝘁*/}
              <label className="block font-medium text-sm mb-3 text-gray-300 dark:text-white">
                Content
              </label>
              <textarea
                value={task.content}
                onChange={(event) =>
                  setTask({ ...task, content: event.target.value })
                }
                id="task_content"
                placeholder="Write"
                rows={5}
                className="bg-gray-700 border  border-none outline-none focus: ring-gray-500 text-white text-sm rounded  w-full p-2.5"
              />
            </div>
            <div className="mt-4">
              {/*𝗧𝗮𝘀𝗸-Status*/}
              <select
                value={task.status}
                onChange={(event) =>
                  setTask({ ...task, stauts: event.target.value })
                }
                id="task_status"
                className="bg-gray-700 border  border-none outline-none focus: ring-gray-500 text-white text-sm rounded  w-full p-2.5">
                <option value="none" disabled>
                  --Select--
                </option>
                <option value="pending">Pending</option>
                <option value="complete">Completed</option>
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-green-500 rounded hover:bg-green-300 px-3 py-2 mr-3">
                Add-Task
              </button>
              <button className="bg-red-600 hover:bg-red-500 rounded px-3 py-2">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default pageTask;
