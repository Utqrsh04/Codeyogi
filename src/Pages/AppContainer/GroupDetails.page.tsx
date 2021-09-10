import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { groupChangeSelected } from "../../actions/groups.actions";
import Avatar from "../../components/Avatar/Avatar";
import {
  groupLoadingByIdSelector,
  selectedGroupCreatorSelector,
  selectedGroupErrorSelector,
  selectedGroupMemberListSelector,
  selectedGroupSelector,
} from "../../selectors/group.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetails: FC<Props> = (props) => {
  const dispatch = useDispatch();
  // const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const groupId = +useParams<{ groupId: string }>().groupId;

  const group = useAppSelector(selectedGroupSelector);
  const loading = useAppSelector(groupLoadingByIdSelector);
  const error = useAppSelector(selectedGroupErrorSelector);

  // const currentId = useMemo(() => groupIds.indexOf(groupId), [
  //   groupId,
  //   groupIds,
  // ]);

  const creator = useAppSelector(selectedGroupCreatorSelector);
  const members = useAppSelector(selectedGroupMemberListSelector);

  // console.log(creator, members);

  // console.log("Group ID ", groupId);
  // console.log("Group IDs ", groupIds);

  useEffect(() => {
    dispatch(groupChangeSelected(groupId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  if (loading && group === undefined) {
    return <div>Loading...</div>;
  }
  // // if (error) {
  // //   return (
  // //     <div className="font-bold text-xl flex-col p-3 mt-80 mx-40 text-center">
  // //       <div className="text-red-400">{error}</div>
  // //       <Link to={"/groups/" + (groupId + 1)}> Next Group </Link>
  // //     </div>
  // //   );
  // // }

  return (
    <div>
      {/* {loading && <div className="text-red-600">Loading...</div>} */}
      {group !== undefined ? (
        <div className="relative">
          <div className="flex-col items-center justify-center mx-auto sm:w-2/5 space-y-4 bg-blue-300 px-5 py-2 rounded-t-lg border-t-2 border-black">
            <Link
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              to="/groups"
            >
              Back to Groups Page
            </Link>
            <div className="pt-2 mx-auto">
              <div className="w-full">
                <div className="">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-left">Group Name</h3>
                      <h5>{group.name}</h5>
                    </div>
                    <div className="md:pr-10">
                      <h3 className="font-bold text-left">Group ID</h3>
                      <h5>{group.id}</h5>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <h3 className="font-bold text-left">Description</h3>
                    <h5>{group.description}</h5>
                  </div>
                  <div>
                    <h3 className="font-bold text-left">Created At</h3>
                    <h5>{group.created_at}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            {creator && (
              <div className="flex-col items-center justify-center mx-auto sm:w-2/5 space-y-3 bg-red-200 px-5 py-2">
                <div className="mx-auto">
                  <div className="w-full">
                    <div className="">
                      <div>
                        <h3 className="font-bold text-left">Creator Name</h3>
                        <h5 className="text-left">
                          {creator?.first_name} {creator?.last_name}
                        </h5>
                      </div>
                      <div>
                        <h3 className="font-bold text-left">Role</h3>
                        <h5 className="text-left">{creator?.role}</h5>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      <div>
                        <h3 className="font-bold text-left">Status</h3>
                        <h5 className="text-left">{creator?.status}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex-col items-center justify-center mx-auto sm:w-2/5 space-y-2 bg-blue-200 px-5 py-2 rounded-b-lg border-b-2 border-black shadow-2xl ">
              {members !== undefined && (
                <div>
                  <h1 className="font-bold">Members List</h1>
                  <ul>
                    {members.map((member, index) => {
                      return (
                        member && (
                          <li
                            key={index}
                            className={
                              "border border-black " +
                              (index % 2 === 0 ? "bg-gray-200" : "bg-red-200")
                            }
                          >
                            <div className="flex justify-around py-2 px-3">
                              <Avatar theme={"Small"} active={false} />

                              <div className=" flex justify-center items-center">
                                <h3>
                                  {member?.first_name + " " + member?.last_name}
                                </h3>
                              </div>
                            </div>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-400 text-red-800 text-lg font-semibold">
          {error}
        </div>
      )}
    </div>
  );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
