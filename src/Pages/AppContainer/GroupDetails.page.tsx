import { FC, memo, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { sidebarActions } from "../../actions/sidebar.actions";
import { fetchGroupData } from "../../api";
import Header from "../../components/Header";
import { Group } from "../../models/Group";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetails: FC<Props> = (props) => {
  const [groupData, setgroupData] = useState<Group>();

  const history = useHistory();

  const str = history.location.pathname.split("/");
  const id = parseInt(str[str.length - 1]);

  useEffect(() => {
    fetchGroupData(id).then((groupData) => {
      console.log("Data ", groupData);
      groupData && setgroupData(groupData);
    });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const user = useAppSelector(meSelector);
  const sidebar = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <>
      {groupData && (
        <>
<div className="text-center w-full fixed z-40">
        <Header  />
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
            <h2 className="font-semibold">Dashboard</h2>
          </div>
          <div className=" mx-4 flex my-2 text-center ">
            <span className="  sm:block bg-blue-200 px-1 text-black my-auto rounded-sm font-semibold ">
            Welcome {`${user!.first_name} ${user!.last_name}`}
            </span>
          </div>
        </div>
      </div>


      <div className=" relative top-28">


          <div className="flex-col p-5 justify-center items-center mx-auto w-60 space-y-5 bg-blue-400">
          <div className=" text-left">
            <h1 className=" font-semibold">Group Name - {groupData.name}</h1>
            <h2 className=" text-xs ">
              Group Description - {groupData.description}
            </h2>
          </div>
          <div className=" text-left text-sm">
            {groupData.creator && (
              <h2 className=" font-semibold">
                Creater Name - {groupData.creator.first_name}
              </h2>
            )}
            {groupData.created_at && (
              <h2>Created At - {groupData.created_at} </h2>
              )}
          </div>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => history.push("/Groups")}
            >
            Back to Groups Page
          </button>
        </div>
      </div>
        </>
      )}
    </>
  );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
