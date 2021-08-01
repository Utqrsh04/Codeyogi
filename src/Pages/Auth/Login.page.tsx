import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button.";
import { login } from "../../api/auth";
import { User } from "../../models/User";
import { useDispatch } from "react-redux";
import { meLoginAction } from "../../store";

interface Props {
  onLogin: (user: User) => void;
}

const Login: FC<Props> = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();

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
      login(data).then((u) => {
        dispatch(meLoginAction(u));
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

            <Button
              Icon={HiLockClosed}
              type="submit"
              isSubmmiting={isSubmitting}
            >
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