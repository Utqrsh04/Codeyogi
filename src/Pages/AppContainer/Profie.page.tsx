import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import About from "../../components/ProfilePage/About";
import Contact from "../../components/ProfilePage/Contact";
import GeneralInfo from "../../components/ProfilePage/GeneralInfo";
import Social from "../../components/ProfilePage/Social";
import WorkPlatForms from "../../components/ProfilePage/WorkPlatForms";
import Sidebar from "../../components/Sidebar/Sidebar";
import { meToggleSidebar, useAppSelector } from "../../store";

interface Props {}

const Profie: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const sidebar = useAppSelector((state) => state.isSidebarOpen);

  const toggleSidebar = () => {
    sidebar
      ? dispatch(meToggleSidebar(false))
      : dispatch(meToggleSidebar(true));
  };

  return (
    <div className="w-screen bg-gray-200">
      <div className="text-center">
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

      <section className="space-x-5 flex">
        <div className="">
          <Sidebar classes={sidebar} />
        </div>

        <div className="rounded-lg px-4 w-full">
          <GeneralInfo />
          <About />
          <WorkPlatForms />
          <Contact />
          <Social />
          <footer className="h-14 w-5/6 flex justify-between px-20 bottom-0 fixed bg-purple-900 rounded-t-md">
            <button className="mt-3 px-3 h-8 bg-blue-600 rounded-md ">
              Reset All
            </button>
            <button className="mt-3 px-3 h-8 bg-blue-600 rounded-md ">
              Save Changes
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
};

Profie.defaultProps = {};

export default memo(Profie);
