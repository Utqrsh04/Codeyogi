import { FC, memo } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppSelector } from "../../store";
import grpImg from "../../images/grpImg.jpg";
import ProfileInput from "../../components/ProfilePage/ProfileInput";
import { loggedInUserSelector } from "../../selectors/user.selectors";
import { useDispatch } from "react-redux";
import { userUpdating } from "../../actions/user.actions";

interface Props {}

const Profie: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const sidebar = useAppSelector((state) => state.sidebar.isOpen);
  const user = useAppSelector(loggedInUserSelector);
  // console.log("Profile Page ", user);


  const {
    handleSubmit,
    handleReset,
    getFieldProps,
    touched,
    errors,
  } = useFormik({
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

      gender: yup.string(),
    }),
    onSubmit: (data, { setSubmitting }) => {
      dispatch(userUpdating(data));
      {
        // console.log("Profile Page ", data);
        window.location.href = "/profile";
      }
      // console.log("Profile Page On Submit ", data);
    },
  });

  return (
    <div className="relative">
      <section className="space-x-5 flex p-5 bg-gray-200 justify-center">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div
            className={
              " my-5 px-6 py-4 bg-white items-center rounded-lg " +
              (sidebar ? " ml-20 " : " mx-auto ")
            }
          >
            <h3 className=" font-medium text-lg ">GENERAL INFORMATION</h3>
            <div className="space-x-2 flex items-center sm:mx-5 ">
              <div className=" text-center w-28 sm:w-32 h-32 space-y-4 sm:m-4 ">
                <img src={grpImg} alt="" />
                <h4 className=" text-blue-700 text-sm">Upload Picture</h4>
              </div>
              <div className=" pt-5 w-full ">
                <div className=" flex ">
                  <div className="mx-4 sm:w-2/6 space-y-1">
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
            className={
              "fixed bottom-0 flex justify-around space-x-10 bg-blue-900 inset-x-0 px-5 py-3 rounded-t-md" +
              (sidebar ? " ml-20 " : " mx-auto ")
            }
          >
            <button
              type="reset"
              className="px-3 h-8 shadow-lg text-white drop-shadow-2xl bg-blue-600 rounded-md "
            >
              Reset All
            </button>
            <button
              type="submit"
              className="px-3 h-8 bg-green-600 shadow-lg drop-shadow-2xl text-white rounded-md "
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
