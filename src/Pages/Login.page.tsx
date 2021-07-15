import React, { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";

interface Props {}

const Login: FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className=" w-1/2 h-screen">
      <div className=" mx-auto text-center pt-10 ">
        <h2 className=" text-4xl ">
          Log in to <p className=" inline text-blue-500 ">Codeyogi</p>
        </h2>
        <h2 className=" pt-5 ">
          New Here?{" "}
          <Link to="/signup">
            <span className=" text-blue-500">Create an Account</span>
          </Link>
        </h2>
      </div>
      <div className=" w-1/2 mx-auto pt-32 ">
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className=" flex flex-row ">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <FaUserAlt className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={handleChnage}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                 text-gray-900 font-bold rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className=" flex flex-row items-center">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <FaLock
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={data.password}
                onChange={handleChnage}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="w-20  ">
            <button
              onClick={() => {
                console.log(data);
              }}
              className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Log in
            </button>
          </div>
        </form>
        <h2 className=" text-blue-500 pt-20 font-semibold ">
          © 2021 All Rights Reserved.
        </h2>
        <Link to="/dashboard">
          <span className=" font-semibold text-black">Go to Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
