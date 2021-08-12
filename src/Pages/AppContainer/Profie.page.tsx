import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../../components/Header";
import * as yup from "yup";

// import Sidebar from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../store";
import { sidebarActions } from "../../actions/sidebar.actions";
import { useFormik } from "formik";
import { updateMe } from "../../api";
import grpImg from "../../images/grpImg.jpg";
import { meSelector } from "../../selectors/auth.selectors";
import ProfileInput from "../../components/ProfileInput";

interface Props { }

const Profie: FC<Props> = (props) => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const user = useAppSelector(meSelector);
  // console.log("Profile Page ", user);

  const { handleSubmit, handleReset, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      first_name: user!.first_name,
      last_name: user!.last_name,
      phone_number: user!.phone_number,
      gender: user!.gender,
    },
    validationSchema: yup.object().shape({
      first_name: yup
        .string()
        .required("First Name is required")
        .matches(/^[aA-zZ\s]+$/, "Numbers not allowed."),

      last_name: yup
        .string()
        .required("Last Name is required")
        .matches(/^[aA-zZ\s]+$/, "Numbers not allowed."),

      phone_number: yup
        .number()
        .typeError("Enter numbers only")
        .positive("Phone number Cannot be Negetive")
        .required("Phone Number is required")
        .moreThan(999999999, "Enter 10 digits")
        .lessThan(10000000000, "Enter 10 digits"),

      gender: yup
        .string()

    }),
    onSubmit: (data) => {
      updateMe(data).then((data) => {
        // console.log("Profile Page Update ME ", data);
        window.location.href = "/profile";
      });
      console.log("Profile Page On Submit ", data);
    },
  });

  return (
    <div className="">
      <div className="text-center fixed z-40 w-full">
        <Header />
        <div className="bg-white mb-2 sm:px-5 sm:pr-10 pr-2 text-gray-700 h-14 flex flex-row justify-between items-center">
          <div className=" flex items-center space-x-1 justify-evenly ">
            <button
              className=" m-2 w-6 h-6"
              onClick={() =>
                sidebar
                  ? sidebarActions.sidebar(false)
                  : sidebarActions.sidebar(true)
              }
            >
              <GiHamburgerMenu />
            </button>
            <h2 className="font-semibold">Users / Account Settings</h2>
          </div>
          <span className="  sm:block bg-blue-100 px-2 text-xl text-black my-auto rounded-md font-semibold ">
            Welcome {`${user!.first_name} ${user!.last_name}`}
          </span>
        </div>
      </div>

      <section className="space-x-5 flex w-10/12 left-40 bg-white justify-center relative top-28">

          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
              <h3 className=" font-medium text-lg ">GENERAL INFORMATION</h3>
              <div className="space-x-2 flex items-center mx-5 ">
                <div className=" text-center w-32 h-32 space-y-4 m-4 ">
                  <img src={grpImg} alt="" />
                  <h4 className=" text-blue-700 text-sm">Upload Picture</h4>
                </div>
                <div className=" pt-5 w-full ">
                  <div className=" flex ">
                    <div className="mx-4 sm:w-2/6 space-y-1">
                      {/* <h4 className=" text-sm font-light ">First name </h4> */}
                      {/* <input
                        type="text"
                        className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
                        id="first_name"
                        {...getFieldProps("first_name")}
                      /> */}
                      <ProfileInput
                        label="First Name"
                        id="first_name"
                        touched={touched.first_name}
                        error={errors.first_name}
                        {...getFieldProps("first_name")}
                      />
                    </div>
                    <div className="mx-4 sm:w-2/6 space-y-1">
                      <ProfileInput
                        label="Last Name"
                        id="last_name"
                        touched={touched.last_name}
                        error={errors.last_name}
                        {...getFieldProps("last_name")}
                      />
                    </div>
                  </div>
                  <div className="mx-4 sm:w-2/6 space-y-1 mt-2">
                    <ProfileInput
                      label="Phone Number"
                      id="phone_number"
                      touched={touched.phone_number}
                      error={errors.phone_number}
                      {...getFieldProps("phone_number")}
                    />
                  </div>
                  <div className="mx-4 sm:w-2/6 space-y-1 mt-2">
                    <h4 className=" text-sm font-light "> Gender</h4>
                    <select
                      id="gender"
                      {...getFieldProps("gender")}
                      className=" bg-gray-100 "
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="fixed bottom-0 flex space-x-10 justify-between px-5 py-3 rounded-t-md">
              <button
                type="reset"
                className="px-3 h-8 shadow-lg text-white bg-blue-600 rounded-md "
              >
                Reset All
              </button>
              <button
                type="submit"
                className="px-3 h-8 bg-green-600 shadow-lg text-white rounded-md "
              >
                Save Changes
              </button>
            </div>
          </form>
      </section>
    </div>
  );
};

Profie.defaultProps = {};

export default memo(Profie);
