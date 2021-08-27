import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userSelectedChanged } from "../../actions/user.actions";
import Avatar from "../../components/Avatar/Avatar";
import {
  userByIdSelector,
  userLoadingByIdSelector,
} from "../../selectors/user.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetails: FC<Props> = (props) => {

  const dispatch = useDispatch();

  const userId = useParams<{ userId: string }>().userId;
  const id: number = +userId;

  useEffect(() => {
    if (currentUser === undefined) {
      dispatch(userSelectedChanged(id));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // const currentUser = useAppSelector(selectedUserSelector);
  const byIds = useAppSelector(userByIdSelector);
  const loading = useAppSelector(userLoadingByIdSelector);

  const currentUser = byIds[id];
  // console.log(" byIDSelector ", byIds);
  const userIDS = Object.keys(byIds);
  console.log("IDS ", userIDS);

  // console.log(" Current User ", byIds[id]);

  if (loading && currentUser === undefined) {
    return <div>Loading...</div>;
  }
  // console.log("Current User Details ", currentUser);

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

          {loading && <div className="text-red-600">Loading...</div>}
          {currentUser !== undefined ? (
            <>
              <div className="md:flex items-center">
                <div className="flex flex-col items-center justify-center flex-shrink-0 pr-5">
                  {/* <Avatar /> */}
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
                      <h3 className=" font-bold">DOB</h3>
                      <h5>
                        {currentUser.birth_date +
                          " " +
                          currentUser.birth_month +
                          " " +
                          currentUser.birth_year}
                      </h5>
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
            <div className="text-red-500">{}</div>
          )}
        </div>
      </div>
    </>
  );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);
