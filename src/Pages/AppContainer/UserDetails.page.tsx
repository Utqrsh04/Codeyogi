import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userChangeOffset, userChangeSelected } from "../../actions/user.actions";
import Avatar from "../../components/Avatar/Avatar";
import {
  selectedUserErrorSelector,
  userLoadingByIdSelector,
  usersListSelector,
} from "../../selectors/user.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetails: FC<Props> = (props) => {
  const userId = useParams<{ userId: string }>().userId;
  const id: number = +userId;

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser === undefined) {
      dispatch(userChangeSelected(id));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // const currentUser = useAppSelector(selectedUserSelector);
  const loading = useAppSelector(userLoadingByIdSelector);
  const userDetailError = useAppSelector(selectedUserErrorSelector);

  const users = useAppSelector(usersListSelector);
  // console.log(users);

  useEffect(() => {
    dispatch(userChangeOffset(0));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  let idx: any = 0;
  users && users.map((user, index) => {  // eslint-disable-line 
    if (user.id === id) idx = index;
  });
  const currentUser = users && users[idx];
  // console.log(currentUser);
  // console.log(" Current User ", byIds[id]);
  if (loading && currentUser === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" relative top-28">
        <div
          className={
            "flex-col p-5 justify-center items-center mx-auto sm:w-2/5 space-y-5 bg-blue-300 "
          }
        >
          <Link
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            to="/users"
          >
            Back to Users Page
          </Link>
          <h1 className=" font-semibold">User ID - {userId}</h1>

          {loading && <div className="text-blue-800">Loading...</div>}
          {currentUser !== undefined ? (
            <>
              <div className="md:flex items-center">
                <div className="flex flex-col items-center justify-center flex-shrink-0 pr-5">
                  <Avatar active={false} />
                </div>

                <div className="mt-10 w-full md:mt-0 ">
                  <div className="flex space-x-3 justify-between">
                    <div>
                      <h3 className=" font-bold">Name</h3>
                      <h5>
                        {currentUser.first_name + " " + currentUser.last_name}
                      </h5>
                    </div>
                    <div>
                      <h3 className=" font-bold">Role</h3>
                      <h5>{currentUser.role}</h5>
                    </div>
                    <div>
                      <h3 className=" font-bold">Phone</h3>
                      <h5>{currentUser.phone_number}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-red-500">{userDetailError}</div>
          )}
        </div>
      </div>
    </>
  );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);
