import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ListCard from "../../components/ListCard/ListCard";
// import { fetchGroups } from "../../middlewares/groups.middleware";
import { useAppSelector } from "../../store";
import { sidebarActions } from "../../actions/sidebar.actions";
import {
  groupsLoadingSelector,
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/group.selectors";
import { meSelector } from "../../selectors/auth.selectors";
import { FaSpinner } from "react-icons/fa";
import { queryChangedAction } from "../../actions/groups.actions";
import { useDispatch } from "react-redux";

interface Props {}

const Groups: FC<Props> = () => {
  const dispatch = useDispatch();

  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupsSelector);
  console.log(" Groups Data ", groups);

  return (
    <div className="relative ">
      <div className="text-center w-full fixed top-14 z-40">
        {/* <Header /> */}
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
            <h2 className="font-semibold">Groups</h2>
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-gray-100 px-1 text-black my-auto rounded-sm font-semibold ">
              Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
            <div className="mx-1 flex rounded-lg items-center">
              <input
                onChange={(e) => dispatch(queryChangedAction(e.target.value))}
                value={query}
                type="text"
                placeholder="Search Group"
                className="bg-gray-100 rounded-lg md:w-44 md:ml-5 w-32 h-5 p-4 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" relative top-28 pt-3">
        <div className=" flex justify-center items-center mx-auto ">
          {groups.length === 0 && (
            <h1 className="text-2xl text-red-600 font-semibold mt-10 ">
              No Records Found ! Search again
            </h1>
          )}
          {loading && <FaSpinner className=" w-10 h-10 animate-spin  " />}
        </div>
        {<ListCard data={groups!} />}
      </div>
    </div>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
