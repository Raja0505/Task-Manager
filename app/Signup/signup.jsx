"use client";
import React, { useState } from "react";
import Signupbanner from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/UserService";

const Signup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const doSignup = async (event) => {
    event.preventDefault();
    // console.log(data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is Required !!");
      return;
    }
    try {
      const result = await signUp(data);
      toast.success("User Registered", { position: "top-center" });
      setdata({
        name: "",
        email: "",
        password: "",
      });
      return result;
    } catch (error) {
      console.log(error);
      toast.info("Error Occured");
    }
  };
  const resetForm = () => {
    setdata({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4 col-start-5 p-4 shadow-2xl shadow-slate-500 mt-5">
          <div className="mt-6">
            <div className="flex justify-center">
              <Image src={Signupbanner} alt="image" style={{ width: "50%" }} />
            </div>
            <h1 className="text-3xl text-white text-center mt-2"> Sign-Up</h1>
            <form action="#!" className="mt-3 mb-5" onSubmit={doSignup}>
              <div className="mt-3">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2 text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full border-none outline-none rounded bg-gray-700 p-2.5 border text-white"
                  placeholder="Username"
                  name="user_name"
                  onChange={(event) =>
                    setdata({
                      ...data,
                      name: event.target.value,
                    })
                  }
                  value={data.name}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300">
                  email
                </label>
                <input
                  type="email"
                  className="w-full border-none outline-none rounded bg-gray-700 p-2.5 border text-white"
                  placeholder="email"
                  name="user_email"
                  onChange={(event) =>
                    setdata({
                      ...data,
                      email: event.target.value,
                    })
                  }
                  value={data.email}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <input
                  type="text"
                  className="w-full border-none outline-none rounded bg-gray-700 p-2.5 border text-white"
                  placeholder="password"
                  name="user_password"
                  onChange={(event) =>
                    setdata({
                      ...data,
                      password: event.target.value,
                    })
                  }
                  value={data.password}
                />
              </div>

              <div className="flex justify-center mt-8 ">
                <button
                  type="submit"
                  className="bg-green-600 rounded outline-none border-none px-3 py-2 text-2xl mr-4 hover:bg-green-500">
                  Signup
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-red-600 rounded outline-none border-none px-3 py-2 text-2xl hover:bg-red-500">
                  Reset
                </button>
              </div>
              {JSON.stringify(data)}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
