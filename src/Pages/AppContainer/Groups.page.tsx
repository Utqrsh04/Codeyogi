import { FC, memo, useEffect } from "react";
import ListCard from "../../components/ListCard/ListCard";
import { useAppSelector } from "../../store";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  groupLoadingListSelector,
  groupParamsSelector,
  groupsListSelector,
} from "../../selectors/group.selectors";
import { groupChangeParams } from "../../actions/groups.actions";
import Button from "../../components/Button/Button.";

interface Props {}

const Groups: FC<Props> = () => {
  const dispatch = useDispatch();

  const params = useAppSelector(groupParamsSelector);
  const loading = useAppSelector(groupLoadingListSelector);
  const groups = useAppSelector(groupsListSelector);

  useEffect(() => {
    dispatch(groupChangeParams(" ", params.offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Groups Page ", groups);

  return (
    <>
    <div className=" relative">
      <div className=" pt-3 mx-auto">
        <div className="flex justify-center m-5">
          <input
            onChange={(e) =>
              dispatch(groupChangeParams(e.target.value, params.offset))
            }
            type="text"
            name="searchbar"
            placeholder="Search Group"
            className="bg-gray-100 rounded-lg mx-auto h-5 p-4 "
          />
        </div>
        {groups && (
          <>
            <span className="text-center flex justify-center ">
              <h3>
                {loading && <FaSpinner className=" w-5 h-5 animate-spin  " />}
              </h3>
              {!loading && groups.length === 0 && (
                <h3 className=" text-red-600 font-semibold ">
                  No Records Found ! Search again
                </h3>
              )}
            </span>
            {<ListCard data={groups!} />}
          </>
        )}
        
      </div>
    </div>
    <div className="flex justify-between items-center px-10 pt-6">
          <Button
            disabled={params.offset === 0}
            onClick={() => {
              dispatch(groupChangeParams(params.query, params.offset - 10));
            }}
          >
            Previous
          </Button>

          <Button
            onClick={() => {
              dispatch(groupChangeParams(params.query, params.offset + 10));
            }}
          >
            Next
          </Button>
        </div>
    </>

  );
};

Groups.defaultProps = {};

export default memo(Groups);
