import { FC, memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchGroupData } from "../api";
import { Group } from "../models/Group";

interface Props {}

const GroupData: FC<Props> = (props) => {
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

  return (
    <>
      {groupData && (
        <div className=" my-20 flex-col p-5 justify-center items-center mx-auto space-y-5 bg-blue-400">
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
      )}
    </>
  );
};

GroupData.defaultProps = {};

export default memo(GroupData);
