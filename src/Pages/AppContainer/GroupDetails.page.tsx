import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { sidebarActions } from "../../actions/sidebar.actions";
import { fetchGroupData } from "../../api";
import Header from "../../components/Header/Header";
import { meSelector } from "../../selectors/auth.selectors";
import { groupByIdSelector } from "../../selectors/group.selectors";
import { useAppSelector } from "../../store";

interface Props { }

const GroupDetails: FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  const groupId = +(useParams<{ groupId: string }>().groupId);
  const groupByIds = useAppSelector(groupByIdSelector)
  let group = groupByIds[groupId]

  if (group) {
    fetchGroupData(groupId).then((groupData) => {
      console.log("Data ", groupData);
      groupData && (group = groupData)
    });
  }

  // useEffect(() => {
  //   fetchGroupData(id).then((groupData) => {
  //     console.log("Data ", groupData);
  //     groupData && setgroupData(groupData);
  //   });
  // }, []); //eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      {group && (
        <>
          <div className="text-center w-full fixed z-40">
            <Header />
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
                <h2 className="font-semibold">Group Details</h2>
              </div>
              <div className=" mx-4 flex my-2 text-center ">
                <span className="  sm:block bg-gray-100 px-1 text-black my-auto rounded-sm font-semibold ">
                  Welcome {`${user!.first_name} ${user!.last_name} `}
                </span>
              </div>
            </div>
          </div>


          <div className=" relative top-28">
            <div className={"flex-col p-5 justify-center items-center mx-auto sm:w-2/5 space-y-5 bg-blue-400 " + (sidebar ? " " : " sm:ml-20  ")}>
              <h1 className=" font-semibold">Group ID - {groupId}</h1>
              <div className=" text-left">
                <h1 className=" font-semibold">Group Name - {group.name}</h1>
                <h2 className=" text-xs ">
                  Group Description - {group.description}
                </h2>
              </div>
              <div className=" text-left text-sm">
                {group.creator && (
                  <h2 className=" font-semibold">
                    Creater Name - {group.creator.first_name}
                  </h2>
                )}
                {group.created_at && (
                  <h2>Created At - {group.created_at} </h2>
                )}
              </div>
              <Link
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                to="/groups"
              >
                Back to Groups Page
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
