"use client";
import Loginsvg from "@/assets/login.svg";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginform = (event) => {
    event.preventDefault();
    if (loginData.email.trim() == "" || loginData.password.trim() == "") {
      toast.error("Enter all fields", { position: "top-center" });
      return;
    }
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className=" grid grid-cols-12">
        <div className="col-span-4 col-start-5 shadow-2xl shadow-slate-500 p-6">
          <div className="flex justify-center mb-6">
            <Image src={Loginsvg} alt="Loginimage" style={{ width: "50%" }} />
          </div>
          <div>
            <h1 className="text-3xl text-white text-center mb-4">Login</h1>
            <form action="#!" onSubmit={loginform}>
              <div>
                <label
                  htmlFor="user-email "
                  className="block text-sm font-md text-gray-300 mb-3">
                  email
                </label>
                <input
                  type="email"
                  className="w-full border-none outline-none rounded bg-gray-700 text-white p-2.5"
                  placeholder="username"
                  name="user_name"
                  onChange={(event) =>
                    setLoginData({
                      ...loginData,
                      email: event.target.value,
                    })
                  }
                  value={loginData.email}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="user-password"
                  className="block text-sm fond-md text-gray-300 mb-3">
                  password
                </label>
                <input
                  type="text"
                  className="w-full border-none outline-none bg-gray-700 p-2.5 text-white"
                  placeholder="password"
                  onChange={(event) =>
                    setLoginData({
                      ...loginData,
                      password: event.target.value,
                    })
                  }
                  value={loginData.password}
                />
              </div>

              <div className="mt-4 flex justify-center">
                <button className="outline-none border-none bg-green-600 rounded px-3 py-2 text-1xl hover:bg-green-500 hover:scale-100 mr-3">
                  Login
                </button>
                <button className="outline-none border-none bg-red-600 rounded px-3 py-2  hover:bg-red-500 hover:scale-100">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
