import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button.";
import { HiLockClosed } from "react-icons/hi";

interface Props {}

const Login: FC<Props> = (props) => {
  const history = useHistory();

  const {
    getFieldProps,
    handleSubmit,
    isSubmitting,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log(`Form Submitting ${data}`);
      setTimeout(() => {
        console.log(`Form Submitted Sucessfully`);
        history.push("/dashboard");
      }, 2000);
    },
  });

  return (
    <div className=" lg:w-1/2 h-screen text-center flex-col mx-auto">
      <div className=" text-center min-w-max pt-8 ">
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
        <form className="mt-8 px-10 space-y-6 " onSubmit={handleSubmit}>
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
              id="password"
              type="password"
              autoComplete="current-password"
              required
              touched={touched.password}
              error={errors.password}
              {...getFieldProps("password")}
              placeholder="Password"
              Icon={FaLock}
            />
          </div>

          <div className="sm:flex mx-auto justify-around items-center space-y-5 ">
            <div className="text-base mx-auto pt-3 font-medium">
              <Link to="/forgot-password">Show Password</Link>
              <label className=" px-3 ">
                <input type="checkbox" name="ShowPassword" id="ShowPassword" />
              </label>
            </div>

            <Button Icon={HiLockClosed} isSubmmiting={isSubmitting}>
              Sign In
            </Button>
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
      <h2 className=" text-blue-700 mt-16 text-sm font-semibold ">
        © 2021 All Rights Reserved.
      </h2>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
