import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../store";
import { sidebarActions } from "../../actions/sidebar.actions";
import { useMe } from "../../hooks/useLoggedInUser";
import { useFormik } from "formik";
import { updateMe } from "../../api";
import grpImg from "../../images/grpImg.jpg";

interface Props {}

const Profie: FC<Props> = (props) => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const user = useMe();
  // console.log("Profile Page ", user);

  const { handleSubmit, handleReset, getFieldProps } = useFormik({
    initialValues: {
      first_name: user!.first_name,
      last_name: user!.last_name,
      phone_number: user!.phone_number,
      gender: user!.gender,
    },
    onSubmit: (data) => {
      updateMe(data).then((data) => {
        // console.log("Profile Page Update ME ", data);
        window.location.href = "/profile";
      });
      console.log("Profile Page On Submit ", data);
    },
  });

  return (
    <div className="w-screen bg-gray-200">
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
          <span className="  sm:block bg-blue-200 px-1 text-black my-auto rounded-sm font-semibold ">
            Welcome {`${user!.first_name} ${user!.last_name}`}
          </span>
        </div>
      </div>

      <section className="space-x-5 flex relative top-28">
        <div className="">
          <Sidebar classes={sidebar} />
        </div>
        <div className="rounded-lg px-4 w-full">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className=" my-5 px-6 py-4 bg-white items-center rounded-lg ">
              <h3 className=" font-medium text-lg ">GENERAL INFORMATION</h3>
              <div className="space-x-2 flex items-center mx-5 ">
                <div className=" text-center w-32 h-32 space-y-4 m-4 ">
                  <img src={grpImg} alt="" />
                  <h4 className=" text-blue-700 text-sm">Upload Picture</h4>
                </div>
                <div className=" w-px bg-gray-300 h-40"></div>
                <div className=" pt-5 w-full ">
                  <div className=" flex ">
                    <div className="mx-4 sm:w-2/6 space-y-1">
                      <h4 className=" text-sm font-light ">First name </h4>
                      <input
                        type="text"
                        className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
                        id="first_name"
                        {...getFieldProps("first_name")}
                      />
                    </div>
                    <div className="mx-4 sm:w-2/6 space-y-1">
                      <h4 className=" text-sm font-light "> Last Name </h4>
                      <input
                        type="text"
                        className=" w-full border p-2 border-gray-400 rounded-lg h-10 "
                        id="lastName"
                        {...getFieldProps("last_name")}
                      />
                    </div>
                  </div>
                  <div className="mx-4 sm:w-2/6 space-y-1 mt-2">
                    <h4 className=" text-sm font-light "> Phone Number</h4>
                    <input
                      className=" w-full border p-2 border-gray-400 rounded-lg h-10"
                      type="text"
                      id="phone_number"
                      // value={user!.phone_number}
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

            <footer className="h-14 md:w-3/4 xl:w-1085 px-20 bottom-0 fixed bg-purple-900 rounded-t-md">
              <div className=" flex mt-3 justify-between ">
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
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
};

Profie.defaultProps = {};

export default memo(Profie);
