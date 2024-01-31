import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <>
      <nav className="bg-blue-300 flex justify-between items-center py-4 px-3">
        <div className="brand">
          <h1 className=" text-2xl font-bold ">Note-It</h1>
        </div>
        <div>
          <ul className=" flex space-x-6 font-normal ">
            <li>
              <Link href="/" className="hover:text-slate-500 font-bold  ">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/add-task"
                className="hover:text-slate-500 font-semibold ">
                Add-Task
              </Link>
            </li>
            <li>
              <Link
                href="/show-task"
                className="hover:text-slate-500 font-semibold ">
                Show-Task
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex space-x-4 font-semibold ">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/Signup">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
