import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaSpinner, FaUserAlt } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Login: FC<Props> = (props) => {
  const history = useHistory();

  const { getFieldProps, handleSubmit, touched, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
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
      <div className=" text-center min-w-max  pt-5 ">
        <h2 className=" text-4xl ">
          Log in to{" "}
          <p className=" inline font-semibold text-blue-500 ">Codeyogi</p>
        </h2>
        <h2 className="font-medium pt-3 ">
          New Here?{" "}
          <Link to="/signup">
            <span className=" underline text-blue-500">Create an Account</span>
          </Link>
        </h2>
      </div>

      <div className="px-3 pt-10 lg:mx-auto">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="shadow-sm px-10 mx-5 w-11/12 space-y-3">
            <div className="flex flex-row ">
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
                 text-gray-900 font-bold rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div className=" text-red-700 text-left text-sm h-5 ">
              {" "}
              {errors.email}
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
                className="appearance-none rounded-none relative block w-full px-5 py-2 placeholder-gray-400 text-gray-900 rounded-b-md font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className=" text-red-700 text-left text-sm h-5 ">
              {" "}
              {errors.password}
            </div>
          </div>

          <div className="sm:flex mx-5 justify-around items-center space-y-5 ">
            <div className="text-base pt-5 font-medium">
              <Link to="/forgot-password">Show Password</Link>
              <label className=" px-3 ">
                <input type="checkbox" name="ShowPassword" id="ShowPassword" />
              </label>
            </div>

            <button
              type="submit"
              className=" sm:w-28 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
            {isSubmitting && <FaSpinner className=" mt-3 animate-spin " />}
          </div>
        </form>

        <div className=" mt-10 text-center space-y-3">
          <div>
            <Link
              to="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <span className=" font-semibold text-black">Go to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
      <h2 className=" text-blue-500 mt-16 font-semibold ">
        © 2021 All Rights Reserved.
      </h2>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
