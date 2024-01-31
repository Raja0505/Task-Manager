import React from "react";

const footer = () => {
  return (
    <>
      <footer className="bg-blue-600 h-40 mt-4">
        <div className="flex justify-around items-center p-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Welcome to Note-It</h1>
            <p>
              Here you can add your daily task and This beautiful Task-manager
              will remind you what task you have to complete
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Connect With Us</h1>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
