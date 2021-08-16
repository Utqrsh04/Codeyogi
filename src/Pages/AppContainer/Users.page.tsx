import { FC, memo, useEffect } from "react";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";

import { FaSpinner } from "react-icons/fa";
import {
  userLoadingListSelector,
  usersListSelector,
} from "../../selectors/user.selectors";
import {
  userChangeOffset,
  userChangeSelected,
} from "../../actions/user.actions";
import { Link } from "react-router-dom";
import Avatar from "../../components/Card/Avatar";

interface Props {}

const Users: FC<Props> = () => {
  const dispatch = useDispatch();

  const loading = useAppSelector(userLoadingListSelector);
  const users = useAppSelector(usersListSelector);

  useEffect(() => {
    dispatch(userChangeOffset(0));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("Users Data ", users);

  return (
    <div className="  relative">
      <div className="">
        {loading && <FaSpinner className={"animate-spin h-8 w-8 "} />}
        {users && (
          <div>
            <ul className=" flex-col justify-center items-center mx-auto w-2/4">
              {users.map((user, index) => {
                return (
                  <li
                    key={user.id}
                    className={
                      " " +
                      (index % 2 === 0 ? "bg-white" : "bg-gray-200")
                    }
                  >
                    <Link
                      onClick={() => {
                        dispatch(userChangeSelected(user.id!));
                      }}
                      to={"/users/" + user.id}
                      className="flex w-full py-1 px-3"
                    >
                      <div className="flex space-x-3 justify-between items-center">
                        <Avatar theme={"small"} />
                        <h6>{user.first_name + " " + user.last_name}</h6>
                        <h6>{user.role}</h6>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

Users.defaultProps = {};

export default memo(Users);
