import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { sidebarActions } from "../../actions/sidebar.actions";
import { useAppSelector } from "../../store";

interface Props {}

const Recordings: FC<Props> = (props) => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <div className=" text-center w-full fixed top-14">
      <div className="bg-white px-5 text-gray-700 h-14 flex flex-row items-center justify-between">
        <div className=" flex justify-around ">
          <button
            className=" mx-1 w-6 h-6"
            onClick={() =>
              sidebar
                ? sidebarActions.sidebar(false)
                : sidebarActions.sidebar(true)
            }
          >
            <GiHamburgerMenu />
          </button>
          <h2 className="font-semibold">Recordings</h2>
        </div>
      </div>
      {/* <Sidebar classes={sidebar} /> */}
      <section className="space-x-5 flex justify-center top-28">
        <div className=" flex justify-center w-full text-center items-center ">
          <h1
            className={" text-xl font-semibold " + (sidebar ? " ml-20 " : " ")}
          >
            This is Recordings Page
          </h1>
        </div>
      </section>
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
