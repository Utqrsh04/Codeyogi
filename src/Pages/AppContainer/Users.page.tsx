import { FC, memo, useEffect } from "react";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import grpImg from "../../images/grpImg.jpg";
import { FaSpinner } from "react-icons/fa";
import {
  userOffSetSelector,
  usersListSelector,
} from "../../selectors/user.selectors";
import {
  userChangeOffset,
  userChangeSelected,
} from "../../actions/user.actions";
import { Link } from "react-router-dom";
import Avatar from "../../components/Card/Avatar";
import Button from "../../components/Button/Button.";

interface Props {}

const Users: FC<Props> = () => {
  const dispatch = useDispatch();

  const users = useAppSelector(usersListSelector);
  const offset = useAppSelector(userOffSetSelector);

  useEffect(() => {
    dispatch(userChangeOffset(10));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log("Users Data ", users );

  return (
    <div className="  relative">
      <div>
        <span className="text-center flex justify-center ">
          <h3>{ users === undefined && <FaSpinner className=" w-5 h-5 animate-spin " />}</h3>
        </span>
        {users && (
          <>
            <div>
              <ul className=" flex-col justify-center mt-5 items-center mx-auto w-2/4 border-2 border-red-400 rounded-lg p-1">
                {users.map((user, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        " " + (index % 2 === 0 ? "bg-white" : "bg-gray-200")
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
                          <div className="w-9 h-9">
                            <Avatar theme={"small"} avatarSrc={grpImg} />
                          </div>
                          <h6 className="font-bold text-sm ">
                            {user.first_name + " " + user.last_name}
                          </h6>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
        <div className="flex justify-between items-center px-10 pt-6 fixed w-full bottom-7">
          <Button
            disabled={offset === 0}
            onClick={() => {
              dispatch(userChangeOffset(offset - 10));
            }}
          >
            Previous
          </Button>

          <Button
            onClick={() => {
              dispatch(userChangeOffset(offset + 10));
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

Users.defaultProps = {};

export default memo(Users);
