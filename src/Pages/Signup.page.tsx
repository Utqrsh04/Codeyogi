import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt, FaSpinner } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();

  const { getFieldProps, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        username: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email("Invalid email address"),
        username: yup
          .string()
          .required()
          .min(5, ({ min }) => `Must be ${min} characters or more`),
        password: yup
          .string()
          .required()
          .min(8, ({ min }) => `Must be ${min} characters or more`),
      }),
      onSubmit: (data) => {
        console.log(`Form Submitting ${data}`);
        setTimeout(() => {
          console.log(`Form Submitted SucessFully`);
          history.push("/dashboard");
        }, 2000);
      },
    });

  return (
    <div className=" lg:w-1/2 h-screen text-center flex-col mx-auto">
      <div className="sm:text-center pt-4 ">
        <h2 className=" text-4xl ">Get started with a</h2>
        <h2 className=" text-4xl ">free account</h2>
        <h2 className="font-medium pt-3 ">
          Already have an account?{" "}
          <Link to="/login">
            <span className=" underline text-blue-500">Log in</span>
          </Link>
        </h2>
      </div>

      <div className="px-3 pt-10 lg:mx-auto">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="px-10 mx-5 w-11/12 space-y-3">
            <div className="flex flex-row items-center">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <FaUserAlt className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                {...getFieldProps("email")}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                 text-gray-900 font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className=" h-px  bg-gray-300 "></div>
            <div className=" text-red-700 text-left text-sm h-5 ">
              {" "}
              {errors.email}
            </div>
            <div className="flex flex-row items-center ">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <FiAtSign className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              <input
                id="username"
                type="username"
                autoComplete="username"
                {...getFieldProps("username")}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                 text-gray-900 font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className=" h-px  bg-gray-300 "></div>
            <div className=" text-red-700 text-left text-sm h-5 ">
              {" "}
              {errors.username}
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
                type="password"
                autoComplete="current-password"
                {...getFieldProps("password")}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                text-gray-900 font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className=" h-px bg-gray-300 "></div>
            <div className=" text-red-700 text-left text-sm h-5 ">
              {errors.password}
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              type="submit"
              className="w-auto group flex relative py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting && <FaSpinner className="animate-spin mr-5 " />}
              Sign up
            </button>
          </div>
        </form>
      </div>
      <h2 className=" text-blue-700 mt-16 text-sm font-semibold ">
        © 2021 All Rights Reserved.
      </h2>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
