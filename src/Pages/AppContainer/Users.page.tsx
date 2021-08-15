import { FC, memo, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppSelector } from "../../store";
import { sidebarActions } from "../../actions/sidebar.actions";
import { meSelector } from "../../selectors/auth.selectors";
import { useDispatch } from "react-redux";

import { FaSpinner } from "react-icons/fa";
import ListCard from "../../components/ListCard/ListCard";
import { fetchUsersApi } from "../../api/users";

interface Props {}

const Users: FC<Props> = () => {
  const dispatch = useDispatch();

  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  // const loading = useAppSelector(usersLoadingSelector);
  // const users = useAppSelector(userByIdSelector);

  // console.log("Users Data ", users);

  useEffect(() => {
    fetchUsersApi().then((data) => {
      console.log("User Page fetchUserApi res ", data.data.data);
      //     usersFetchCompleted(data.data.data);
    });
  }, []);

  // fetchUsersApi().then((data) => console.log("User Page ", data));

  return (
    <div className="relative ">
      <div className="text-center w-full fixed top-14">
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
            <h2 className="font-semibold">Users</h2>
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-gray-100 px-1 text-black my-auto rounded-sm font-semibold ">
              Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
            <div className="mx-1 flex rounded-lg items-center">
              {/* <input
                // onChange={(e) => dispatch(queryChangedAction(e.target.value))}
                value={query}
                type="text"
                placeholder="Search User"
                className="bg-gray-100 rounded-lg md:w-44 md:ml-5 w-32 h-5 p-4 "
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" relative top-28">
        {/* <div className=" flex justify-center items-center mx-auto ">
          {users.length === 0 && (
            <h1 className="text-2xl text-red-600 font-semibold mt-10 ">
              No Records Found ! Search again
            </h1>
          )}
          {loading && <FaSpinner className=" w-8 h-8 animate-spin  " />}
          <h1>This is Users Page :/ {user!.first_name}</h1>
        </div> */}
        {/* {<ListCard data={users!} />} */}
      </div>
    </div>
  );
};

Users.defaultProps = {};

export default memo(Users);
