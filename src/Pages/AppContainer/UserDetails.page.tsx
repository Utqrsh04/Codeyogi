import { FC, memo, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { sidebarActions } from "../../actions/sidebar.actions";
import { userChangeSelected } from "../../actions/user.actions";
import Avatar from "../../components/Card/Avatar";
import { meSelector } from "../../selectors/auth.selectors";
import {
  selectedUserErrorSelector,
  selectedUserSelector,
  userLoadingByIdSelector,
} from "../../selectors/user.selectors";
// import { groupByIdSelector } from "../../selectors/group.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetails: FC<Props> = (props) => {
  const me = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();

  const userId = +useParams<{ userId: string }>().userId;
  const id: number = +userId;
  const user = useAppSelector(selectedUserSelector);
  const loading = useAppSelector(userLoadingByIdSelector);
  const error = useAppSelector(selectedUserErrorSelector);

  useEffect(() => {
    if (user === undefined) {
      dispatch(userChangeSelected(id));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading && user === undefined) {
    return <div>Loading...</div>;
  }

  console.log("User Details ", user);

  return (
    <>
      <div className=" relative top-28">
        <div
          className={
            "flex-col p-5 justify-center items-center mx-auto sm:w-2/5 space-y-5 bg-blue-400 " +
            (sidebar ? " " : " sm:ml-20  ")
          }
        >
          <h1 className=" font-semibold">User ID - {userId}</h1>

          {loading && <div className="text-red-600">Loading...</div>}
          {user !== undefined ? (
            <>
              <div className="md:flex">
                <div className="flex flex-col items-center flex-shrink-0 mt-6 border-gray-200 md:border-r md:pr-20">
                  <Avatar />
                </div>

                <div className="mt-10 w-full md:mt-0 md:ml-7.5">
                  <div className="flex justify-between mb-6">
                    <div>
                      <h3 className="text-searchBar-text">Name</h3>
                      <h5>
                        {user.first_name +
                          " " +
                          user.middle_name +
                          " " +
                          user.last_name}
                      </h5>
                    </div>
                    <div>
                      <h3 className="text-searchBar-text">Date of Birth</h3>
                      <h5>
                        {user.birth_date +
                          " " +
                          user.birth_month +
                          " " +
                          user.birth_year}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-red-500">{error}</div>
          )}
          <Link
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            to="/users"
          >
            Back to Users Page
          </Link>
        </div>
      </div>
    </>
  );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);
