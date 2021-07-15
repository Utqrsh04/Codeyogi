import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import {FiAtSign} from "react-icons/fi";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className=" w-1/2 h-screen">
      <div className=" mx-auto text-center pt-10 ">
        <h2>This is Signup Component</h2>
        <h2>Already have an account </h2>
        <Link to="/login">
          <span className=" text-red-500">Click here</span>
        </Link>
      </div>
      <div className=" w-1/2 mx-auto pt-32 ">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className=" flex flex-row ">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <FaUserAlt className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                 text-gray-900 font-bold rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>

            <div className=" flex flex-row items-center">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <FiAtSign
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />

              <input
                id="password"
                name="username"
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
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
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

          </div>

          <div className="w-24  ">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
