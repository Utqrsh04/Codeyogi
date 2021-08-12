import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../../components/Header";
import { useAppSelector } from "../../store";
import { sidebarActions } from "../../actions/sidebar.actions";

import { meSelector } from "../../selectors/auth.selectors";

interface Props {}

const Dashboard: FC<Props> = () => {
  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);


  return (
    <div className=" w-screen ">
      <div className="text-center w-full fixed z-40">
        <Header />
        <div className="bg-white mb-2 sm:px-4 sm:pr-8 pr-2 text-gray-700 h-14 flex flex-row items-center">
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
            <h2 className="font-semibold">Dashboard</h2>
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-blue-200 px-1 text-black my-auto rounded-sm font-semibold ">
            Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
          </div>
        </div>
      </div>

      <section className="space-x-5 flex top-28">
        <div className="bg-gray-300 w-full flex justify-center items-center ">
          <h1 className=" text-xl font-semibold ">This is Dashboard</h1>
        </div>
      </section>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
