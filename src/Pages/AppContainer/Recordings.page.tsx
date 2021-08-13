import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { sidebarActions } from "../../actions/sidebar.actions";
import Header from "../../components/Header/Header";
import { useAppSelector } from "../../store";

interface Props {}

const Recordings: FC<Props> = (props) => {
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <div className=" h-screen w-screen text-center bg-gray-100">
      <Header />
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
    </div>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
