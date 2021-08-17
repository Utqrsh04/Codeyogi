import { FC, memo, useEffect } from "react";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import grpImg from "../../images/grpImg.jpg";

import { FaSpinner } from "react-icons/fa";
import {
  userLoadingListSelector,
  usersListSelector,
} from "../../selectors/user.selectors";
import { userFetch, userSelectedChanged } from "../../actions/user.actions";
import { Link } from "react-router-dom";
import Avatar from "../../components/Card/Avatar";

interface Props {}

const Users: FC<Props> = () => {
  const dispatch = useDispatch();

  const loading = useAppSelector(userLoadingListSelector);
  const users = useAppSelector(usersListSelector);

  useEffect(() => {
    dispatch(userFetch(0));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log("Users Data ", users);
  console.log("loading" , loading);
  

  return (
    <div className="  relative">
      <div>
        <span className="text-center flex justify-center ">
          <h3>
            { loading && <FaSpinner className=" w-5 h-5 animate-spin " />}
          </h3>
        </span>
        {users && (
          <div>
            <ul className=" flex-col justify-center mt-5 items-center mx-auto w-2/4">
              {users.map((user, index) => {
                return (
                  <li
                    key={user.id}
                    className={
                      " " + (index % 2 === 0 ? "bg-white" : "bg-gray-200")
                    }
                  >
                    <Link
                      onClick={() => {
                        dispatch(userSelectedChanged(user.id!));
                      }}
                      to={"/users/" + user.id}
                      className="flex w-full py-1 px-3"
                    >
                      <div className="flex space-x-3 justify-between items-center">
                        <div className="w-9 h-9">
                          <Avatar theme={"small"} avatarSrc={grpImg} />
                        </div>
                        <h6 className="font-bold text-sm">
                          {user.first_name + " " + user.last_name}
                        </h6>
                        {/* <h6>{user.}</h6> */}
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
