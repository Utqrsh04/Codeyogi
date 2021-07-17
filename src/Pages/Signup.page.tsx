import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt , FaSpinner } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();

  const { getFieldProps, handleSubmit, isSubmitting, touched, errors } =
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
    <div className=" w-1/2 h-screen">
      <div className=" mx-auto text-center pt-10 ">
        <h2 className=" text-4xl ">
          Log in to <p className=" inline text-blue-500 ">Codeyogi</p>
        </h2>
        <h2 className=" pt-5 ">
          Already have an account?{" "}
          <Link to="/login">
            <span className=" text-blue-500">Sign in</span>
          </Link>
        </h2>
      </div>
      <div className=" w-1/2 mx-auto pt-20 ">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className=" flex flex-row ">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <FaUserAlt className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              <input
                id="email-address"
                type="email"
                required
                autoComplete="email"
                {...getFieldProps("email")}
                className="appearance-none rounded-none relative block w-full px-5 py-2  placeholder-gray-400
                 text-gray-900 font-bold rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            {touched.email && (
              <div className=" text-red-700 "> {errors.email}</div>
            )}

            <div className=" flex flex-row items-center">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <FiAtSign
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />

              <input
                id="username"
                type="username"
                {...getFieldProps("username")}
                required
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            {touched.username && (
              <div className=" text-red-700 "> {errors.username}</div>
            )}

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
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {touched.password && (
              <div className=" text-red-700 "> {errors.password}</div>
            )}
          </div>

          <div className="w-24  ">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign up
            </button>
            {isSubmitting && <FaSpinner className=" mt-3 animate-spin " />}
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
