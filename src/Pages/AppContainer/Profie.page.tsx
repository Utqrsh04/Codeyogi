import { useFormik } from "formik";
import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import About from "../../components/ProfilePage/About";
import Contact from "../../com../../components/ProfilePage/Contact";
import GeneralInfo from "../../components/ProfilePage/GeneralInfo";
import Social from "../../components/ProfilePage/Social";
import WorkPlatForms from "../../components/ProfilePage/WorkPlatForms";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getProfiledata } from "../../models/ProfileData";
import { useAppSelector } from "../../store";
import { uiToggleSidebar } from "../../actions/sidebar.actions";

interface Props {}

const Profie: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const toggleSidebar = () => {
    sidebar
      ? dispatch(uiToggleSidebar(false))
      : dispatch(uiToggleSidebar(true));
  };

  // const profiledata = localStorage.getItem("intialData");
  // profiledata && console.log("Profile Page Data", JSON.parse(profiledata));

  const profiledata = getProfiledata();
  console.log("Profile Page Data ", profiledata);

  const { handleSubmit } = useFormik({
    initialValues: profiledata,
    onSubmit: (data) => {
      console.log("Profile Page On Submit ", data);
    },
  });

  return (
    <div className="w-screen bg-gray-200">
      <div className="text-center fixed z-40 w-full">
        <Header />
        <div className="bg-white mb-2 sm:px-5 sm:pr-10 pr-2 text-gray-700 h-14 flex flex-row justify-between items-center">
          <div className=" flex items-center space-x-1 justify-evenly ">
            <button className=" m-2 w-6 h-6" onClick={toggleSidebar}>
              <GiHamburgerMenu />
            </button>
            <h2 className="font-semibold">Users / Account Settings</h2>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex relative top-28">
        <div className="">
          <Sidebar classes={sidebar} />
        </div>

        <div className="rounded-lg px-4 w-full">
          <form onSubmit={handleSubmit}>
            <GeneralInfo data={profiledata.general_info} />
            <About data={profiledata.bio} />
            <WorkPlatForms data={profiledata.work_platforms} />
            <Contact data={profiledata.contact} />
            <Social data={profiledata.social_links} />
            <footer className="h-14 md:w-3/4 xl:w-1085 px-20 bottom-0 fixed bg-purple-900 rounded-t-md">
              <div className=" flex mt-3 justify-between ">
                <button className="px-3 h-8 shadow-lg text-white bg-blue-600 rounded-md ">
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
