import { FC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import * as yup from "yup";
import { Switch as Toggle } from "@headlessui/react";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button.";
import { login } from "../../api/auth";
import { User } from "../../models/User";
import { authActions } from "../../actions/auth.actions";

interface Props {
  onLogin: (user: User) => void;
}

const Login: FC<Props> = () => {
  const history = useHistory();
  const [showPass, setShowPass] = useState(false);


  const {
    getFieldProps,
    handleSubmit,
    isSubmitting,
    isValid,
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
      login(data).then((u) => {
        authActions.login(u);
        history.push("/dashboard");
      });
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

          <div className="sm:flex mx-auto justify-around items-center space-y-5 ">
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
              Icon={HiLockClosed}
              type="submit"
              isSubmmiting={isSubmitting}
              disabled={!isValid}
            >
              Sign In
            </Button>
          </div>
        </form>

        <div className=" mt-10 text-center space-y-3">
          <label
            htmlFor="keepLogged"
            className="cursor-pointer"
          >
            <input
              type="checkbox"
              id="keepLogged"
              name="keepLogged"
              className="cursor-pointer"
            />
            <span className="ml-3 font-medium">Keep me logged in</span>
          </label>
          <div>
            <Link
              to="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password
            </Link>
          </div>

        </div>
      </div>
      <h1 className=" mt-8 sm:mt-20 mx-auto w-3/4 text-sm font-semibold ">
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

Login.defaultProps = {};

export default memo(Login);
