import { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Switch as Toggle } from "@headlessui/react";
import { FiAtSign } from "react-icons/fi";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button.";
import { HiLockClosed } from "react-icons/hi";

interface Props { }

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const [showPass, setShowPass] = useState(false);

  const { getFieldProps, handleSubmit, isSubmitting, isValid,
    touched,
    errors, } = useFormik({
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
        // console.log(`Form Submitting ${data}`);
        setTimeout(() => {
          console.log(`Form Submitted SucessFully`);
          history.push("/dashboard");
        }, 1000);
      },
    });

  return (
    <div className=" lg:w-1/2 text-center flex-col">
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
            <Input
              id="email"
              type="email"
              autoComplete="current-email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="Email"
              Icon={FaUserAlt}
            />
            <Input
              id="username"
              type="username"
              autoComplete="current-username"
              required
              touched={touched.username}
              error={errors.username}
              {...getFieldProps("username")}
              placeholder="Username"
              Icon={FiAtSign}
            />

            <Input
              id="password"
              type={showPass ? "text" : "password"}
              autoComplete="current-password"
              required
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
              placeholder="Password"
              Icon={FaLock}
            />
          </div>

          <div className="flex justify-center ">
            {/* <button
              type="submit"
              className="w-auto group flex relative py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting && <FaSpinner className="animate-spin mr-5 " />}
              Sign up
            </button> */}
            <div className="text-base mx-auto pt-3 font-medium">
              <Toggle.Group>
                <div className="flex items-center">
                  <Toggle.Label className="text-sm font-semibold text-dark-300">
                    Show Password
                  </Toggle.Label>
                  <Toggle
                    checked={showPass}
                    onChange={setShowPass}
                    type="button"
                    className={
                      "h-4.5 rounded-full w-9 ml-3 flex items-center transition-color ease-in-out duration-300 " +
                      (showPass ? "bg-blue-500" : "bg-gray-200")
                    }
                  >
                    <span
                      className={`${showPass
                        ? "translate-x-5 bg-gray-300 "
                        : "translate-x-0 bg-blue-500"
                        } inline-block w-3.5 h-3.5 ease-in-out duration-200 rounded-full transform transition-all`}
                    />
                  </Toggle>
                </div>
              </Toggle.Group>
            </div>

            <Button
              type="submit"
              Icon={HiLockClosed} isSubmmiting={isSubmitting} disabled={!isValid} >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
      <h1 className=" mt-8 sm:mt-12 mx-auto w-3/4 text-sm font-semibold ">
        © 2021 All Rights Reserved.
        <p className=" text-blue-700 inline "> Codeyogi </p>
        is a product of Designreset.
        <p className=" text-blue-700 inline"> Cookie Preferences </p>,
        <p className=" text-blue-700 inline "> Privacy </p>, and
        <p className=" text-blue-700 inline"> Terms. </p>
      </h1>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
