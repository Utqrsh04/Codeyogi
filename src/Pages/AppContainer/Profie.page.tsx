import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";
import About from "../../components/ProfilePage/About";
import Contact from "../../components/ProfilePage/Contact";
import GeneralInfo from "../../components/ProfilePage/GeneralInfo";
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

          <div className="w-40 sm:block hidden h-16 mt-4 py-2">
            <Dropdown
              items={["Settings", "Mail", "Print", "Download", "Share"]}
              needArrowIcon={true}
            >
              Settings
            </Dropdown>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex">
        <Sidebar classes={sidebar} />

        <div className="rounded-lg px-4 w-full">
          <GeneralInfo />
          <About />
          <WorkPlatForms />
          <Contact/>
        </div>
        <footer className="">
          <div className="fixed w-96 bg-blue-400 rounded-t-lg bottom-0 text-center h-14 ">
            SAVE CHANGES
          </div>
        </footer>
      </section>
    </div>
  );
};

Profie.defaultProps = {};

export default memo(Profie);
